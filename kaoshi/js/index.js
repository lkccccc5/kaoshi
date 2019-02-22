var run1;
autoRun1();
function autoRun1 (){		
	run1 = setInterval(function(){
			tushulis[index1].removeAttribute("class");
			tushucirLis[index1].removeAttribute("class");
			index1++;
			if(index1 == tushulis.length){
				index1 = 0;
			}
			tushulis[index1].setAttribute("class","active");
			tushucirLis[index1].setAttribute("class","active-circle");
		},2000)	
}
tushu.onmouseenter = function(){
	clearInterval(run1);
}
tushu.onmouseleave = function(){
	autoRun1();
}
