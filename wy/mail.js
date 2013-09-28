$(function(){

	initEvents();
	checkTxt();
	checkPwd();
});

function initEvents() {
	$("#txtQ").keyup(function(){
		checkTxt();
	});
		
	$("#pwdQ").keyup(function(){
		checkPwd();
	});
}

function checkTxt(){
        var val=$("#txtQ").val();
	     if (val=="") {
	     	
	     	$("#txtQ").css("background-Image",'url("email1.png")');
	     }
	    else{
	   	  $("#txtQ").css("background-Image","none");
	     }
}

function checkPwd(){
	var val=$("#pwdQ").val();
     if (val=="") {
     	$("#pwdQ").css("background-Image",'url("email.png")');
     }
    else{
   	  $("#pwdQ").css("background-Image","none");
     }
}