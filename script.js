




getlocation();
function getlocation() {
   navigator.geolocation.getCurrentPosition(resolve,reject);
   
   function resolve(pos) {
    console.log("Latitude : "+pos.coords.latitude + "  longitude : "+ pos.coords.longitude);
    
   const map = document.getElementById('map');


  map.innerHTML =   `<iframe src='https://maps.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed'
  width='600' height='450'   style='border:0;' allow='geolocation' loading='lazy' ></iframe>` 
  
  document.getElementsByClassName('lat')[0].innerHTML = `<p>Latitude: ${pos.coords.latitude}</p>`;
 document.getElementsByClassName('long')[0].innerHTML = `<p>Longitude: ${pos.coords.longitude}</p>`;

 const url= `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=09fb2959afa26c264954d38f7af40f67 ` 
 geturl(url);
   }
   
   function reject(pos) {
    console.log(" Not solved");
   }
   
}
async function geturl(url) {
    
   const response =await fetch(url);
   data = await response.json();
   console.log(data);
   if(data){
      document.getElementsByClassName('txt1')[0].innerHTML=` <p> Latitude :${data.coord.lat} </p>`;
      document.getElementsByClassName('txt2')[0].innerHTML=`Longitude :${data.coord.lon} `;
      document.getElementsByClassName('txt3')[0].innerHTML=`Location :${data.name}`;
      document.getElementsByClassName('txt4')[0].innerHTML= `Min.Temp in Fahrenheit :${data.main.temp_min}`;
      document.getElementsByClassName('txt5')[0].innerHTML=`Max.Temp in Fahrenheit :${data.main.temp_max}`;
   }

}

 



