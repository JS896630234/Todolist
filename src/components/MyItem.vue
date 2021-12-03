<template>
  <li>
            <label>
              <!-- 这里的函数全都是使用函数，参数是实参 -->
              <!-- 动态观察checked是否完成 -->
              <input type="checkbox" :checked = 'todo.done' @click = 'handleCheck(todo,$event)'/>
              <span v-show = '!todo.isEdit'>{{todo.title}}</span>
              <input 
              type="text" 
              :value = 'todo.title' 
              v-show = 'todo.isEdit' 
              @blur = 'handleBlur(todo,$event)'  
              ref = 'inputTitle'
              >
            </label>
            <button class="btn btn-danger" @click='handleDelete(todo.id)'>删除</button>
            <button class="btn btn-edit" v-show = '!todo.isEdit' @click='handleEdit(todo)' >编辑</button>
     </li>
</template>

<script>
export default {
    name:'MyItem',
    
    props:['todo'],
    methods: {
      handleCheck(todo){
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',todo.id)
        
      
        // if(todo.done){
          
        //   // e.target.nextSibling 下一个节点
        //   e.target.nextSibling.style.textDecoration = 'line-through'
        //   // = 'lineThrough'
        // }
        // else{
        //   e.target.nextSibling.style.textDecoration = 'none'
        // }
      
        
      },
      // 使用删除功能
      handleDelete(id){
        if(confirm('确定删除吗？')){
          // this.deleteTodo(id)
          this.$bus.$emit('deleteTodo',id)
        } 
      },
     
      handleEdit(todo){
        // 判断是否存在isEdit属性
        if(todo.isEdit!==undefined){
          todo.isEdit = true
        }
        // 否的话新建一个isEdit值
        else{
           this.$set(todo,'isEdit',true)
        }
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      handleBlur(todo,e){
        todo.isEdit = false
        if(e.target.value.trim() == '') return alert('输入不能为空')
        this.$bus.$emit('updataTodo',todo.id,e.target.value)
      }
    },
   
}
</script>

<style scoped>

   /*item*/
    li {
        list-style: none;
        height: 80px;
        line-height: 80px;
        padding: 0 5px;

    }

    .todo-main li {
        border-bottom: 2px solid rgb(229, 229, 229);
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li label span {
        font-size: 20px;
        padding-left:15px;
    }

    li button {
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

</style>