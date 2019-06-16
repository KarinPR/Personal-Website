import React, { Component } from 'react';
import * as THREE from 'three';
import TextTexture from 'three.texttexture';
// import Styled from 'styled-components';
// import gl from 'gl-react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { render , useThree } from 'react-three-fiber';

// import * as CANNON from 'cannon';


// import { useCannon, Provider } from './useCannon';

import { ConvexGeometry, ConvexBufferGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { ConvexHull } from 'three/examples/jsm/math/ConvexHull.js';

import './Skills.css'

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			verticesInfo : [],
			skills : []
		}
	}
	

	componentDidMount() {
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;


		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 40, width / height, 1, 1000 );
		
		// ///////// BACKGROUND
		const backgroundLoader = new THREE.TextureLoader();
		this.scene.background = backgroundLoader.load('skills-background.jpg' );
		

		const light = new THREE.PointLight( 0xffffff, 1 );
			this.camera.add( light );


		this.renderer = new THREE.WebGLRenderer( { 
			antialias: true,
			// scene,
			alpha: true,
		});
			this.renderer.setPixelRatio( window.devicePixelRatio );
			this.renderer.setSize( width , height );
			this.mount.appendChild( this.renderer.domElement );

		this.initializeCamera();
		this.controls = new OrbitControls( this.camera, this.renderer.domElement ); /// remove THREE

		this.initializeOrbits()
		
		this.scene.add( new THREE.AmbientLight( 0x222222 ) );

		this.sphereGroup = new THREE.Group();
			this.scene.add( this.sphereGroup );
	
		//// Skills - points

		// const vertices = new THREE.DodecahedronGeometry( 12, 2 ).vertices;
		const vertices = new THREE.SphereGeometry( 12, 8, 9 ).vertices; // (12, 6, 3)
		let skills = ['HTML5', 'CSS3', 'Express.js' , 'Javascript', 'React', 'Redux', 'NPM',' Git', 'Node.js', 'Bootstrap4', 'PostgresSQL', 'SQL'];
		// console.log(vertices)
		/////// TextTexture /////
		const textureArray = [];
		const textMaterial = [];
		const textraGeometry = [];


		const fontLoader = new THREE.FontLoader();

		const textArray = skills.reduce((acc, txt) => {
			let texture =  new TextTexture({
				fontFamily: 'Bitter, serif',
				fillStyle: '#FFFFFF',
				fontWeight: 'bolder',
				strokeWidth: 0.1,
				strokeStyle: '#333333',
				padding: 3,
				// word-spacing: 2px,
				transparent: true,
				// letterSpacing: '10px',
				fontSize: 100,
				// fontStyle: 'bold',
				text: [
					`${txt}`,
				].join('\n'),
			});
			return textureArray.push(texture)
		}, [])
		
		textureArray.reduce((acc, texture) => {
			// const textColor = new THREE.Color( 0xff0000 ); 
			return textMaterial.push(new THREE.PointsMaterial( { map: texture, size: 35, alphaTest:0.5  }))
		}, [])
		
		// console.log(textMaterial)
		///////////////////////
		const pointsGeometry = new THREE.BufferGeometry().setFromPoints( vertices ); // could be wordsGeometry ???
		////// Text

			// console.log(textsGeometry)

		// const textPositionGeometry = new THREE.BufferGeometry().setFromPoints( verText );


		///////////////// RANDOMS /////////////////////////
		// const numsToChoose = [...Array(vertices.length).keys()];
		// console.log(numsToChoose)
		// const randoms = [];
		// const randomNums = (arrVer, arrMat) => {
		// 	let i = arrMat.length;
		// 	let rand = 0;
		// 	// const temp = [];

		// 	while (i--) {
		// 		rand = Math.floor(Math.random() * arrVer.length);
		// 		randoms[i] = arrVer[rand];
		// 		arrVer.splice( rand, 1)
		// 	}
		// 	console.log(randoms)
		// 	return randoms;
		// }

		// randomNums (numsToChoose , textMaterial)
		///////////////////////////////////////////////////////////////
		// let skills = ['HTML5', 'CSS3', 'Bootstrap 4', 'Javascript', 'React', 'Redux', 'NPM',' Git', 'Node.js', 'Express.js', 'PostgresSQL', 'SQL'];
		const randoms = [11, 29, 47, 13, 31, 49, 15, 33, 51, 17, 35, 53]
		// const randoms = [10, 9, 16, 7, 5, 11, 18, 6, 13, 1, 14, 3] // from sphere (10,6,5)
		// const randoms = [7, 11, 3, 4, 8, 12, 5, 10, 2, 1, 9, 6]; ///// GOOD GEOMETRY FROM SPHERE (10, 6, 3)
		// const randoms = [0, 13, 3, 4, 8, 12, 5, 10, 2, 1, 9, 6]; /// from sphere
		// const randoms = [10, 19, 14, 12, 16, 1, 5, 18, 13, 15, 9, 11]
		// const randoms = [10, 19, 14, 12, 16, 1, 5, 18, 13, 15, 9, 3] //// from the doce

		for (let i = 0; i < textMaterial.length; i++) {
			const positions = new Float32Array( vertices.length * 3 );
			// const vertex = new THREE.Vector3();
			const textPosition = pointsGeometry.clone();
				textPosition.addAttribute( 'position', new THREE.BufferAttribute(positions , 3))
				// textPosition.addAttributeposition.set(vertices[i].x, vertices[i].y, vertices[i].z);
			// console.log(textPosition)
			// const rand = Math.floor(Math.random() * vertices.length)
				// randoms.push(rand);
			const textPoint = new THREE.Points(textPosition, textMaterial[i]);

				textPoint.position.x = vertices[randoms[i]].x;
				textPoint.position.y = vertices[randoms[i]].y;
				textPoint.position.z = vertices[randoms[i]].z;
				// textPoint.background = new THREE.Color( 'skyblue' );

			this.sphereGroup.add( textPoint );

				textPoint.material.shadowSide =  THREE.DoubleSide;
				textPoint.material.depth = THREE.AlwaysDepth;
				// textPoint.material.textureCombine = THREE.MixOperation;

				// textPoint.material.opacity = 0.5;
				// textPoint.renderOrder = 0;

			this.sphereGroup.add( textPoint );
		}



		//// Sphere 
		const sphereGeometry = new ConvexBufferGeometry( vertices );
		const color = new THREE.Color( 'skyblue' );

		const sphereMaterial = new THREE.MeshLambertMaterial( {
			// color: color,
			// map: texture,
			opacity: 0,
			transparent: true
		} );

		this.sphereBack = new THREE.Mesh( sphereGeometry, sphereMaterial );
			this.sphereBack.material.shadowSide =  THREE.BackSide; // back faces
			this.sphereBack.material.depth = THREE.LessEqualDepth;
			this.sphereBack.renderOrder = -5;

			this.sphereGroup.add( this.sphereBack );

		this.sphereFront = new THREE.Mesh( sphereGeometry, sphereMaterial.clone() );
			this.sphereFront.material.shadowSide =  THREE.FrontSide; // back faces
			this.sphereFront.material.depth = THREE.GreaterEqualDepth;
			this.sphereFront.renderOrder = 10;

			this.sphereGroup.add( this.sphereFront );		

			// console.log(this.sphereGroup)
		this.animate( );

		/// Events
		window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

	}

	componentWillUnmount() {
	    cancelAnimationFrame(this.frameId);
	    this.mount.removeChild( this.renderer.domElement);
	}



	initializeCamera() {
	    this.camera.position.x = 15;
	    this.camera.position.y = 20;
	    this.camera.position.z = 60;
	}

	initializeOrbits() {
		this.controls.minDistance = 20;
		this.controls.maxDistance = 50;
		this.controls.maxPolarAngle = Math.PI / 2;
	    this.controls.rotateSpeed = 1.0;
	    this.controls.zoomSpeed = 1.2;
	    this.controls.panSpeed = 0.8;
	}


	animate ( ) {
		this.frameId = window.requestAnimationFrame( this.animate.bind(this) );
		this.renderer.render( this.scene, this.camera );
		
		this.sphereGroup.rotation.y += 0.005;
	}

	onWindowResize () {
		// console.log('1:', event ,'2:', mount)
	    const updateWidth = this.mount.clientWidth;
	    const updateHeight = this.mount.clientHeight;
		this.renderer.setSize( updateWidth, updateHeight );
		
		this.camera.aspect = updateWidth / updateHeight;
		this.camera.updateProjectionMatrix();
	}

	render () {
		return (
			<div>
				<div 
					id = 'boardCanvas'
					style = {{ width: '100vw', height: '100vh', wordSpacing: '4px', letterSpacing: '2px', padding: '20vh 12vw', zIndex:' 1' }}
					ref = { mount => {
						this.mount = mount;
					}}
					onChange = { event => this.onWindowResize( event, [this.mesh] ).bind(this)}
				>  
					<span className = 'skill-text text-on-back'> My Skills </span>
				</div>
				
			</div>
		);
	}
}

export default Skills;
	
//

	// helper

	// scene.add( new THREE.AxesHelper( 20 ) ) // remove axis




	

	// function randomPoint() {
	// 	return new THREE.Vector3( THREE.Math.randFloat( - 1, 1 ), THREE.Math.randFloat( - 1, 1 ), THREE.Math.randFloat( - 1, 1 ) );
	// }


//

