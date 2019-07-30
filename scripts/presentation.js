var sbLeft = document.getElementById("sidebarLeft");
sbLeft.style.height = Math.floor(sbLeft.offsetWidth) + 'px';


window.addEventListener("resize", function() {
var sbLeft = document.getElementById("sidebarLeft");
sbLeft.style.height = Math.floor(sbLeft.offsetWidth) + 'px';
});

var sbRight = document.getElementById("sidebarRight");
sbRight.style.height = Math.floor(sbRight.offsetWidth) * 0.837801609 + 'px';

window.addEventListener("resize", function() {
var sbRight = document.getElementById("sidebarRight");
sbRight.style.height = Math.floor(sbRight.offsetWidth) * 0.837801609 + 'px';
});
	
var tbLetter = document.getElementById("letter");
tbLetter.style.width = Math.floor(tbLetter.offsetHeight) + 'px';
	
window.addEventListener("resize", function() {
var tbLetter = document.getElementById("letter");
tbLetter.style.width = Math.floor(tbLetter.offsetHeight) + 'px';
});

/*var tbHeader = document.getElementById("header");
tbHeader.style.width = Math.floor(tbHeader.offsetHeight) * 6.79333333 + 'px';
	
window.addEventListener("resize", function() {
var tbHeader = document.getElementById("header");
tbHeader.style.width = Math.floor(tbHeader.offsetHeight) * 6.79333333 + 'px';
});*/