			function onCheckboxClicked(event) {
				deltaAmount = -deltaAmount;
			}
			
			function onDocumentMouseMove( event ) {
				
				// update the mouse variable
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}
