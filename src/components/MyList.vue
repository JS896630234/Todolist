<template>
     <ul class="todo-main">
          
          <MyItem 
          v-for='todoObj in todos' 
          :key = 'todoObj.id' 
          :todo = 'todoObj' 
          >
          </MyItem>
        </ul>
</template>

<script>

    import MyItem from './MyItem'
    export default {
        name:'MyList',
        components:{
            MyItem
        },
        data() {
          return {
           
          }
        },
        props:['todos']
    }

</script>

<style scoped>
 
  /*List  右边主体内容区域*/
    .todo-main {
        margin-left: 0px;

        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 80px;
        line-height: 80px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>