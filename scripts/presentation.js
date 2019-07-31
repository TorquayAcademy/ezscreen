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

function GetDate(){
var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();

var dateText=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
document.getElementById('dateBox').innerHTML=dateText;
}


function GetTime(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var timeText=""+nhour+":"+nmin+":"+nsec+ap+"";
document.getElementById('timeBox').innerHTML=timeText;
}


