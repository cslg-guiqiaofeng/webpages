$(function () {

  showphoto();
});
var handle;
var index=1;
function showphoto(){
  handle = setInterval("light()",300);
}

function light(){
	    
	   	$("#pp1").removeClass("dis");
		$("#pp2").removeClass("dis");
		if (index==1) {
			$("#pp"+index).addClass("dis");
			index=2;
		}else{
			$("#pp"+index).addClass("dis");
			 index=1;
		}
	}