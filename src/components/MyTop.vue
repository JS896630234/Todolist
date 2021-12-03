// 此文件是头部导航栏
<template>
  <header>
            <i class='el-icon-s-grid'></i> <span class='htitle'> To Do</span>
            <div class='search'>
                <span><i class='el-icon-search'></i></span>
                <input type="text">
            </div>
            <!-- 引入图标 -->
            <div class = 'search-right'>
                <i class = 'el-icon-setting'></i>
                <i class = 'el-icon-question'></i>
                <i class="el-icon-s-promotion"></i>
                <i class="el-icon-user-solid"></i>
            </div>
            
        </header>
</template>

<script>
export default {
    
}

</script>

<style>
/* 头部MyTop区域 */

    header {
        height: 48px;
        background: rgb(0, 120, 215);
        z-index: 100;
        line-height: 48px;
        position: relative;
    }

    header i {
        padding-left: 10px;
        color:white
    }

    header span {
        position: absolute;
    }

    header>.htitle {
        color: white;
        font-size: 14px;
        font-weight: 500;
        text-align: "center";
        margin: auto 10px;
    }

    header .search {

        width: 400px;
        height: 50%;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -12px;
        position: absolute;
        /* background: #195, 221, 247; */
   
    }

    .search>span {
        text-align: center;
        line-height: 24px;

    }

    .search input {
        /* width:400px; */
        display: block;
        height: 100%;
        width: 100%;
        padding-left: 28px;
        border: 1px solid #ddd;
        border-radius: 2px;
        box-shadow: inset 0 0 20px 20px skyblue;
        

    }
    .search input:hover{
        box-shadow: inset 0 0 20px 20px white;
        border:0
    }

    .search-right{
        float:right
    }
    .search-right i {
        padding-right:5px;
        font-size: 24px;
        color:white
    }
</style>