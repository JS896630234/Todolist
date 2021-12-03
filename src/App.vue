<template>
  <div id="root">
    <MyTop></MyTop>
    <div class="main">
      <MyNav></MyNav>
      <div class="todo-container">
        <div class="todo-wrap">
          <div><span class="myDay">我的一天 ...</span></div>
          <span class="data">十一月 28号 星期日</span>
          <MyHeader :addTodo="addTodo"></MyHeader>
          <MyList :todos="todos"></MyList>
          <MyFooter
            :todos="todos"
            :checkAllTodo="checkAllTodo"
            :clearAllTodo="clearAllTodo"
          ></MyFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyTop from "./components/MyTop";
import MyNav from "./components/MyNav";

export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    MyList,
    MyTop,
    MyNav,
  },
  data() {
    return {
      // 读取localstorage
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    }, 
    // 勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done;
          // console.log(todo.done);
          // console.log(this);
        }
      });
    },

    // 编辑
    updataTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.title = title;
        }
      });
    },

    // 删除
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        // console.log(todo.done);
        return !todo.done;
      });
    },
  },
  //本地存储
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  //传递数据
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("updataTodo", this.updataTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("deleteTodo");
    this.$bus.$off("updataTodo");
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*base*/

* {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}

i {
  padding-right: 4px;
}

i:hover {
  cursor: pointer;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(114, 175, 199);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: rgb(114, 175, 199);
}

.btn:focus {
  outline: none;
}

.todo-container {
  /* width: 1000px; */
  width: 70vw;
  margin: 0 auto;
  padding-left: 40px;
  float: left;
}

.todo-container .todo-wrap {
  padding: 10px;
  /* border: 1px solid #ddd; */
  /* border-radius: 5px; */
}

.todo-wrap .myDay {
  color: #34373d;
  font-size: 1.5rem;
  font-weight: 600;
}

.todo-wrap .data {
  font-size: 1rem;
  font-weight: 200;
}

/* 调整checkbox中方框的大小 */

input[type="checkbox"] {
  -ms-transform: scale(1.5);
  /* IE */
  -moz-transform: scale(1.5);
  /* FireFox */
  -webkit-transform: scale(1.5);
  /* Safari and Chrome */
  -o-transform: scale(1.5);
  /* Opera */
}
</style>
