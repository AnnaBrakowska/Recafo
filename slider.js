// $(document).ready(function(){
// 	// show the first image
// 	var currentImageNumber=0;
// 		$("#slider img").eq(currentImageNumber).show();
// 		setInterval(function(){
// 			// document.writeln("Hello world");
// 			// hide the current image 
// 			$("#slider img").eq(currentImageNumber).hide();
// 			currentImageNumber++;

// 			// reset back to 0

// 			if(currentImageNumber>$("#slider img").length)
// 			{
// 				currentImageNumber=0;
// 			}
// 			// show the next image
// 			$("#slider img").eq(currentImageNumber).show();
// 		}, 1000);
// });

	var currentImageNumber=0;
	$("#previous").click(function(){

	// show the first image
			$("#sliderManual img").eq(currentImageNumber).hide();

			 currentImageNumber=(currentImageNumber-1)%$("#sliderManual img").length;
			$("#sliderManual img").eq(currentImageNumber).show();
		});
	

	$("#next").click(function(){

	// show the first image
			$("#sliderManual img").eq(currentImageNumber).hide();

			 currentImageNumber=(currentImageNumber+1)%$("#sliderManual img").length;
			$("#sliderManual img").eq(currentImageNumber).show();
		});
	
