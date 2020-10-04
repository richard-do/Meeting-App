// generates a map using google maps
function initMap(){
    const myLatLng = { lat: -25.365, lng: 132.045};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4
    });
    //geocodeTest(map);
}

async function getData(){
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Eiffel+Tower&key=YOUR_API_KEY');
    const data = response.json();
    return data;
}

getData()
    // do something when response received
    .then(data => {
        console.log(data)
        latlong = data.results[0].geometry.location;
        console.log(latlong.lat);
        console.log(latlong.lng);
    });