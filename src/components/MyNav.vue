<template>

            <div class='nav'>
                <ul>
                    <li>
                        
                        <i class="el-icon-sunny"></i>
                        <router-link to="/MyDay">我的一天</router-link>
                    </li>
                    <li> <i class='el-icon-star-off'></i> 重要</li>
                    <li> 
                        <i class="el-icon-date"></i>
                        <router-link to="/MyPlanned">计划内</router-link>      
                    </li>
                    <li> <i class='el-icon-user'></i>已分配给我</li>
                    <li> <i class="el-icon-house"></i>任务</li>
                    <li> <i class="el-icon-document-add"></i> 新建列表</li>
                </ul>
                <div id="map" onload="initMap()"></div>
            </div>
</template>
<script src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"></script>
<script>
export default {

};
  
    
        //地图初始化函数，本例取名为init，开发者可根据实际情况定义
        function initMap() {
            //定义地图中心点坐标
            var center = new TMap.LatLng(39.984120, 116.307484)
            //定义map变量，调用 TMap.Map() 构造函数创建地图
            var map = new TMap.Map(document.getElementById('container'), {
                center: center,//设置地图中心点坐标
                zoom: 17.2,   //设置地图缩放级别
                pitch: 43.5,  //设置俯仰角
                rotation: 45    //设置地图旋转角度
            });
        }
</script>

<style>
 

    /* nav左边导航栏区域 */
    .nav {
        width: 250px;
        height: 100vh;
        /* height:100%; */
        float: left;
        background: #f4f4f4;
    }

    .nav ul li:first-child {
        padding-top: 20px;
    }

    .nav ul li:last-child {
        padding-top: 20px;
        color: rgb(50, 75, 223)
    }

    .nav ul li {
        padding-left: 20px;
        height: 50px;
    }

    .nav ul li:hover {
        background-color: rgb(250, 250, 250);
        cursor: pointer;
    }
    
    #map{
        /*地图(容器)显示大小*/
        width:100%;
        height:300px;
    }

</style>