/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 16-5-4
 * Time: 下午4:30
 * To change this template use File | Settings | File Templates.
 */
var colors = [
	0xFF62B0,
	0x9A03FE,
	0x62D0FF,
	0x48FB0D,
	0xDFA800,
	0xC27E3A,
	0x990099,
	0x9669FE,
	0x23819C,
	0x01F33E,
	0xB6BA18,
	0xFF800D,
	0xB96F6F,
	0x4A9586
];
var particleLight;

var lesson1={
	scene:null,
	camera:null,
	renderer:null,
	container:null,
	controls:null,
	clock:null,
	stats:null,
	init:function(){//初始化函数

		//创建主要场景
		this.scene = new THREE.Scene();
		var SCENE_WIDTH = window.innerWidth,
			SCENE_HEIGHT = window.innerHeight;

		//准备相机
		var VIEW_ANGLE = 45, ASPECT = SCENE_WIDTH / SCENE_HEIGHT, NEAR = 1, FAR = 10000;
		this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE,ASPECT,NEAR,FAR);
		this.scene.add(this.camera);
		this.camera.position.set(-1000,1000,0);
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		//准备渲染
		this.renderer = new THREE.WebGLRenderer({antialias:true,alpha:false});
		this.renderer.setSize(SCENE_WIDTH,SCENE_HEIGHT);
		this.renderer.setClearColor(0xffffff);

		this.renderer.shadowMapEnabled = true;
		this.renderer.shadowMapSoft = true;

		//准备容器
		this.container = document.createElement('div');
		document.body.appendChild(this.container);
		this.container.appendChild(this.renderer.domElement);

		//事件
		THREEx.WindowResize(this.renderer,this.camera);


		//准备控制器(OrbitControls.js)
		this.controls = new THREE.OrbitControls(this.camera,this.renderer.domElement);
		this.controls.target = new THREE.Vector3(0,0,0);

		//准备计时器
		this.clock = new THREE.Clock();

		//准备统计
		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.bottom = '0px';
		this.stats.domElement.style.zIndex = 10;
		this.container.appendChild(this.stats.domElement);

		//添加定向光线
		var dLight = new THREE.DirectionalLight(0xffffff);
		dLight.position.set(1,1000,1);
		dLight.castShadow = true;
		dLight.shadowCameraVisible = true;
		dLight.shadowDarkness = 0.2;
		dLight.shadowMapWidth = dLight.shadowMapHeight = 1000;
		this.scene.add(dLight);

		//添加粒子光线
		particleLight = new THREE.Mesh(new THREE.SphereGeometry(10,10,10),new THREE.MeshBasicMaterial({color: 0x44ff44 }));
		particleLight.position = dLight.position;
		this.scene.add(particleLight);

		// 添加简单的场地
		var groundGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
		ground = new THREE.Mesh(groundGeometry, new THREE.MeshLambertMaterial({
			color: this.getRandColor()
		}));
		ground.position.y = 0;
		ground.rotation.x = - Math.PI / 2;
		ground.receiveShadow = true;
		this.scene.add(ground);

		//添加圆形
		var circle = new THREE.Mesh(new THREE.CircleGeometry(70,50), new THREE.MeshLambertMaterial({color:this.getRandColor()}));
		circle.rotation.x = -Math.PI / 2;
		circle.rotation.y = -Math.PI / 3;
		circle.rotation.z = Math.PI / 3;
		circle.position.x = -300;
		circle.position.y = 150;
		circle.position.z = -300;
		circle.castShadow = circle.receiveShadow = true;
		this.scene.add(circle);


		// 添加方块
		var cube = new THREE.Mesh(new THREE.CubeGeometry(100, 100, 100), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
		cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
		cube.position.x = -300;
		cube.position.y = 150;
		cube.position.z = -100;
		cube.castShadow = cube.receiveShadow = true;
		this.scene.add(cube);


		// 球体
		var sphere = new THREE.Mesh(new THREE.SphereGeometry(70, 32, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
		sphere.rotation.y = -Math.PI / 2;
		sphere.position.x = 100;
		sphere.position.y = 150;
		sphere.position.z = -300;
		sphere.castShadow = sphere.receiveShadow = true;
		this.scene.add(sphere);

	},
	getRandColor:function(){
		return colors[Math.floor(Math.random() * colors.length)];
	}
}

//使场景动画
function animate(){
	requestAnimationFrame(animate);
	render();
	update();
}

//更新控制器状态
function update(){
	lesson1.controls.update(lesson1.clock.getDelta())
	lesson1.stats.update();
	var timer = Date.now() * 0.000025;
	particleLight.position.x = Math.sin(timer * 5) * 300;
	particleLight.position.z = Math.cos(timer * 5) * 300;
}

//渲染场景
function render(){
	if(lesson1.renderer){
		lesson1.renderer.render(lesson1.scene,lesson1.camera);
	}
}

//在页面加载时初始化lesson对象
function initializeLesson(){
	lesson1.init();
	animate();
}

if(window.addEventListener)
	window.addEventListener('load',initializeLesson,false);
else if(window.attachEvent)
	window.attachEvent('onload',initializeLesson);
else window.onload = initializeLesson;