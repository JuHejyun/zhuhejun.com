/**
 * Created by zhuhejun on 2016/11/30.
 */

var markers = new Array();
var aesMarkers = [{
	title:"葛根庙1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
	position: [122.298210,45.914903],
	url:"../aes/IMG_0380.html",
	info:""
}, {
	title:"葛根庙2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
	position: [122.298310,45.914903],
	url:"../aes/IMG_0381.html",
	info:""
}, {
	title:"阿尔山",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [119.327233, 47.602679],
	url:"../aes/IMG_0397.html"
}, {
	title:"套娃广场1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [117.398816, 49.614994],
	url:"../aes/IMG_0437.html"
}, {
	title:"套娃广场2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [117.398916, 49.614994],
	url:"../aes/IMG_0438.html"
}, {
	title:"海拉尔1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [119.768258, 48.955842],
	url:"../aes/IMG_0459.html"
}, {
	title:"海拉尔2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [119.773751, 48.684580],
	url:"../aes/IMG_0466.html"
}, {
	title:"海拉尔3",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [119.762765, 48.126650],
	url:"../aes/IMG_0541.html"
}, {
	title:"阿尔山森林公园1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [120.130300, 47.3436570],
	url:"../aes/IMG_0551.html"
}, {
	title:"阿尔山森林公园2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [120.284109, 47.2826720],
	url:"../aes/IMG_0552.html"
}, {
	title:"杜鹃湖",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [120.569489, 47.412278],
	url:"../aes/IMG_0570.html"
}, {
	title:"石塘林",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [120.491450, 47.3721300],
	url:"../aes/IMG_0571.html"
}];



markers = markers.concat(aesMarkers);


var kbqMarkers = [{
	title:"库布齐1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [109.806884, 40.279902],
	url:"../kbq/PANO_20160430_132732.html"
},{
	title:"库布齐2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [109.812954, 40.275917],
	url:"../kbq/PANO_20160501_094020.html"
},{
	title:"库布齐3",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [109.813768, 40.266773],
	url:"../kbq/PANO_20160501_111538.html"
}]
markers = markers.concat(kbqMarkers);


var qhMarkers = [{
	title:"塔尔寺1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [101.570258, 36.489624],
	url:"../qh/IMG_0110.html"
},{
	title:"库布齐2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [101.570584, 36.489534],
	url:"../qh/IMG_0115.html"
},{
	title:"拉鸡山",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [101.523286, 36.331227],
	url:"../qh/IMG_0120.html"
},{
	title:"青海湖1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [100.363814, 36.662882],
	url:"../qh/IMG_0193.html"
},{
	title:"青海湖2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [100.301124, 36.662479],
	url:"../qh/IMG_0262.html"
},{
	title:"黑马河1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [99.757195, 36.738476],
	url:"../qh/IMG_0294.html"
},{
	title:"黑马河2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [99.754052, 36.740917],
	url:"../qh/IMG_0295.html"
},{
	title:"茶卡盐湖1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [99.094161, 36.725801],
	url:"../qh/IMG_0305.html"
},{
	title:"茶卡盐湖2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [99.097252, 36.721909],
	url:"../qh/IMG_0306.html"
},{
	title:"茶卡盐湖3",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [99.109281, 36.706695],
	url:"../qh/IMG_0307.html"
},{
	title:"橡皮山",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [99.611199, 36.734449],
	url:"../qh/IMG_0309.html"
},{
	title:"贵德地质公园",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [101.562239, 36.226478],
	url:"../qh/IMG_0343.html"
},{
	title:"东关清真寺1",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [101.7976050, 36.6158080],
	url:"../qh/IMG_0347.html"
},{
	title:"东关清真寺2",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [101.7976150, 36.6157080],
	url:"../qh/IMG_0348.html"
}]
markers = markers.concat(qhMarkers);



var qzlMarkers = [{
	title:"墙子路长城",
	icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
	position: [117.220360, 40.423882],
	url:"../qzl/IMG_0092.html"
}]
markers = markers.concat(qzlMarkers);

