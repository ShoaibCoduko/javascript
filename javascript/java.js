console.log("hello World");
for(var i=0; i<10; i++){
    console.log(i);
    const text = document.querySelector("b");
    text.innerHTML="0";
    text.innerHTML=i;
    text.style.backgroundColor="teal";
    text.style.color="white";
    text.style.padding="30px";
    text.style.paddingTop="60px";
    text.style.paddingBottom="60px";
    text.style.borderRadius="50%";
    text.style.marginBottom="2em";
    text.style.display="inline";
    text.style.margin="5ch";
  
}
if(i == 11){
    for(var j=0; j<12; j++)
    {
        console.log(j)
    }
}
else{
    console.log("your Not A good number in")
}
let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";

}
const text = document.querySelector("b");
text.innerHTML=day;
