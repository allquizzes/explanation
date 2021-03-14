var i = 0;
const randomColor = Math.floor(Math.random()*360);
do {
    document.getElementsByTagName("details")[i].style.backgroundColor = "hsl(" + randomColor + ", 100% , 85%";

  i++;
}
while (i < 100);  

