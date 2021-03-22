var button=document.getElementById("submitButton");
var input=document.getElementById("inputValue");

var temp=document.getElementById("temp");
var humidity=document.getElementById("humidity");
var wind=document.getElementById("wind");


button.onclick=function(event){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ef4ea20d50da8241b076c3fb307d0877')
    .then(res=>res.json())
    .then(data=function(data){
        console.log(data);
var tempVal=data["main"]["temp"];
var humVal=data["main"]["humidity"];
var windVal=data["wind"]["speed"];
temp.innerHTML="Temperature:"+tempVal+"K";
humidity.innerHTML="Humidity:"+humVal+"%";
wind.innerHTML="Wind:"+windVal+"km/hr";
input.value="";
    })


    .catch(err=>console.log("Wrong city name"));
}