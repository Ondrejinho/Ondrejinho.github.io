var btnContainer = document.getElementsByClassName("navbar");
var btns = document.getElementsByClassName("btn");

for(var i =0; i<btns.length; i++){
	btns[i].addEventListener('click', function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active");
		this.className += " active";
		})
	}
var skillbar1 = document.getElementById("skill1");
var skillbar2 = document.getElementById("skill2");
var skillbar3 = document.getElementById("skill3");
var skillbar4 = document.getElementById("skill4");
var skillbar5 = document.getElementById("skill5");

	window.addEventListener("scroll", event => {
		let scrolled = window.scrollY;
	    if(scrolled > 1300){
        skillbar1.classList.add("skill1-ani")
		skillbar2.classList.add("skill2-ani")
		skillbar3.classList.add("skill3-ani")
		skillbar4.classList.add("skill4-ani")
		skillbar5.classList.add("skill5-ani")
		}
		console.log(scrolled)
	});