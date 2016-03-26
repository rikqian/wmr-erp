// JavaScript Document
$(document).ready(function(){
	$(".rightimg").click(function(){
		
			$("#fuzc").show(500);
		})
	$("#colse").click(function(){
			$("#fuzc").hide(500);
		})
	
	
	
$(".projectlist").mouseover(function(){
	
		$(this).find("div").removeClass("projectlist_text").addClass('projectlist_on')
	})	
	
	
	$(".projectlist").mouseout(function(){
	
		$(this).find("div").removeClass("projectlist_on").addClass('projectlist_text');
	})	
	

	})