// generates a map using google maps api
function initMap(){
    const myLatLng = { lat: -25.365, lng: 132.045};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom:4
    });
    // testing geocoder
    // geocodeTest(map);
}

// allows conversion of address to lat/long so the
// marker can be placed on the map
function geocodeTest(map){
    const geocoder = new google.maps.Geocoder();
    const address = "Eiffel Tower";

    geocoder.geocode({address : address}, (results, status) => {
        if (status === "OK"){
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map : map,
                position: results[0].geometry.location,
            });

            // generates the latitude and longitude value
            // from the "results" object returned from google
            // that will eventually be stored in a db to minimize
            // calls to api
            latLongObj = results[0].geometry.viewport;
            lat = (latLongObj.Sa.i + latLongObj.Sa.j)/2;
            long = (latLongObj.Ya.i + latLongObj.Ya.j)/2;
            console.log(lat); // latitude value
            console.log(long); // longitude value

            // something here to store marker in db eventually

        } else {
            alert("Geocode failed for the following reason: " + status);
        }
        
    });
}