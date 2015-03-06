	function createControlBox (positionX, positionY, travFunc, boxText ) {
	
		var cubeGeometry = new THREE.BoxGeometry( 20, 20, 20 );
		
		var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

		var newCube = new THREE.Mesh( cubeGeometry, cubeMaterial );
		newCube.position.x = positionX;
		newCube.position.y = positionY;
		newCube.traverse = travFunc
		scene.add( newCube );
		
		// create a canvas element
		var newCanvas = document.createElement('canvas');
		var newContext = newCanvas.getContext('2d');
		newContext.font = "Bold 12px Arial";
		newContext.fillStyle = "rgba(0,0,0,0.95)";
    	newContext.fillText(boxText, 0, 50);
    
		// canvas contents will be used for a texture
		var newTexture = new THREE.Texture(newCanvas) 
		newTexture.needsUpdate = true;
      
    	var newMaterial = new THREE.MeshBasicMaterial( {map: newTexture, side:THREE.DoubleSide } );
    	newMaterial.transparent = true;

   	 	var newPlane = new THREE.Mesh(
        	new THREE.PlaneBufferGeometry(newCanvas.width, newCanvas.height),
        	newMaterial
      	);
		newPlane.position.set(positionX+135,positionY-50,0);
		scene.add( newPlane );
				
	}
