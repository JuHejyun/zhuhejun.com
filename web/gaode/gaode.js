/**
 * Created by zhuhejun on 2016/11/30.
 */
$(function(){

	var map = new AMap.Map("container", {
		resizeEnable: true,
		center: [106.47949219, 39.47012512],//地图中心点
		zoom: 5 //地图显示的缩放级别
	});

	map.clearMap();  // 清除地图覆盖物




// 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
	markers.forEach(function(marker) {
		// new AMap.Marker({
		// 	map: map,
		// 	icon: marker.icon,
		// 	position: [marker.position[0], marker.position[1]],
		// 	offset: new AMap.Pixel(-12, -36)
		// });


		var marker1 = new AMap.Marker({ //添加自定义点标记
			map: map,
			clickable:true,
			position: [marker.position[0], marker.position[1]], //基点位置
			// icon: new AMap.Icon({
			// 	size: new AMap.Size(40, 50),  //图标大小
			// 	image: marker.icon,
			// 	imageOffset: new AMap.Pixel(0, 0)
			// }),
			// icon: marker.icon,
			offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
			// draggable: true,  //是否可拖动
			// content: '<a href="http://lairma.com/qh/IMG_0115.html" target="_blank"><div class="marker-route marker-marker-bus-from"></div></a>'   //自定义点标记覆盖物内容
		});

		//点击事件
		marker1.on("click",function (e) {
			window.open(marker.url);
			// console.log("aaa"+e)
		})

// 设置鼠标划过点标记显示的文字提示
		marker1.setTitle(marker.title);

// 设置label标签
// 	marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
// 		offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
// 		content: "我是marker的label标签"
// 	});

		//信息窗口
		if(marker.info&&marker.info.length>0){
			var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
			infoWindow.setContent(marker.info);
			infoWindow.open(map, marker1.getPosition());
		}


		// 设置点标记的动画效果，此处为弹跳效果
		marker1.setAnimation('AMAP_ANIMATION_DROP');


	});


// var center = map.getCenter();
// var centerText = '当前中心点坐标：' + center.getLng() + ',' + center.getLat();
// document.getElementById('centerCoord').innerHTML = centerText;
// document.getElementById('tips').innerHTML = '成功添加三个点标记，其中有两个在当前地图视野外！';
//
// // 添加事件监听, 使地图自适应显示到合适的范围
// AMap.event.addDomListener(document.getElementById('setFitView'), 'click', function() {
// 	var newCenter = map.setFitView();
// 	document.getElementById('centerCoord').innerHTML = '当前中心点坐标：' + newCenter.getCenter();
// 	document.getElementById('tips').innerHTML = '通过setFitView，地图自适应显示到合适的范围内,点标记已全部显示在视野中！';
// });
})
