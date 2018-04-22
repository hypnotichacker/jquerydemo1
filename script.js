

$(document).ready(function(){
    $(".button1").click(function(){
        $(".img1").fadeIn();
        $(".img1").fadeIn("slow");
        $(".img1").fadeIn(3000);
    });
	
	    $(".button2").click(function(){
        $(".img2").fadeToggle();
        $(".img2").fadeToggle("slow");
        $(".img2").fadeToggle(3000);
    });
	
		$("#clickslide").click(function(){
        $("#panel").slideDown("slow");
    
    });
	
	
	
});