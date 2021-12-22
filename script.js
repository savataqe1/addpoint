function addModelToBG() {

		//Variables for setup

		let container;
		let camera;
		let renderer;
		let scene;
		let box;

		function init() {

			container = document.querySelector(".scene.one");

			//Create scene
			scene = new THREE.Scene();

			const fov = 35;
			const aspect = container.clientWidth/container.clientHeight;
			const near = 0.9;
			const far = 1000;

			//Camera setup
			camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            

			//Renderer
			renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true
			});

			renderer.setSize(container.clientWidth, container.clientHeight);
			renderer.setPixelRatio(window.devicePixelRatio);

			container.appendChild(renderer.domElement);


			function render() {
				renderer.render(scene, camera);
			}


			var geometry = new THREE.BoxGeometry();
			var material = new THREE.MeshNormalMaterial();
			var box = new THREE.Mesh( geometry, material );
const vertices = [];
const colors = [];
/* The geometry of the points */
const sparklesGeometry = new THREE.BufferGeometry();
/* The material of the points */
const sparklesMaterial = new THREE.PointsMaterial({
  size: 1,
  alphaTest: 0.3,
  map: new THREE.TextureLoader().load(
    "https://assets.codepen.io/127738/dotTexture.png"
  ),
  vertexColors: true, // Let Three.js knows that each point has a different color
});
/* Create a Points object */
const points = new THREE.Points(sparklesGeometry, sparklesMaterial);
/* Add the points into the scene */
scene.add(points);
const tempPosition = new THREE.Vector3();
let elephant = null;
let sampler=null;
new THREE.OBJLoader().load(
  "veba.obj",
  (obj) => {
    elephant = obj.children[0];
    elephant.material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0x000000,
      transparent: true,
      opacity: 1,
    });
    scene.add(obj);

    sampler = new THREE.MeshSurfaceSampler(elephant).build();

    renderer.setAnimationLoop(render);
	function addPoint() {
  /* Sample a new point */

  sampler.sample(tempPosition);
  /* Push the point coordinates */
  vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
  /* Update the position attribute with the new coordinates */
  sparklesGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  /* Get a random color from the palette */
}

// ScrollTrigger.create({
//   trigger: ".section-three",
//   onEvent:()=> {addPoint()},

// });
// tl = new TimelineMax();
// tl.to('.section-two', 1, {autoAlpha:"1"} )
// .add( function(){addPoint() }  )
// .to('.section-four', 1, {autoAlpha:"1"} ) 
var tl = gsap.timeline();
tl.to(".section-one", {duration: 1, x: 200})
.add( function(){addPoint() }  )
  .to(".section-four", {duration: 1, x: 200})
  },
  (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
  (err) => console.error(err)
  
);






			animate();

		
        /* Store each particle coordinates & color */



  /* Get a random color from the palette */
}

		function animate() {
			requestAnimationFrame(animate);
			// box.rotation.z += 0.005;

			// console.log('X: ' +camera.position.x)
			// console.log('Y: ' +camera.position.y)
			// console.log('Z: ' +camera.position.z)
      
			renderer.render(scene, camera);
		}

		init();
     
		function onWindowResize() {
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		}

		window.addEventListener("resize", onWindowResize);



		// function onWindowScroll() {
		// }

		// window.addEventListener("scroll", onWindowScroll);

    


	gsap.registerPlugin(ScrollTrigger);
    
    scene.rotation.set(0, 1.88, 0)
    camera.position.set(2, 0, 5)
    

		let car_anim = gsap.timeline()
		   

		// Full Height

		car_anim.to(scene.rotation, {y:0, ease: "power1.inOut", scrollTrigger: {
           
			trigger: ".section-two",
			scrub: 1,
       
		
			end: "top bottom",

            
    }})

		// Slide 2

		car_anim.to(camera.position, {z:80,y:3, ease: "power1.inOut", scrollTrigger: {
      
			trigger: ".section-two",
			scrub: 1,
		     
			start: "top bottom",
			end: "top top",

    }}) 
    
    
		
		// Slide 3
		
		car_anim.to(scene.rotation, {y:0,x:0.2, ease: "power1.inOut", scrollTrigger: {
      
			trigger: ".section-three",
			scrub: 1,

			start: "top bottom",
			end: "bottom top",

    }})

		


		// // Slide 4 - The problem child
		

       
    

	// 	car_anim.to(camera.position, {x:2,z:80,y:10, ease:'power1.inOut', scrollTrigger: {
      
	// 		trigger: ".section-four",
	// 		scrub: 1,

	// 		start: "top 20px",
	// 		end: "bottom top",

    // }})



		// car_anim.progress(1).progress(0);



	}
	addModelToBG();