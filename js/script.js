/*
    Assignment #4
    {GHANBODE EBIEREDE}
*/

$(function () {
    // your code here





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});

if ("geoLocation" in navigator){
    navigator.geoLocation.getCurrentPosition(function (position){
    const Latitude = position.coords.Latitude;
    const Longitude = positon.coords.Longitude;

    document.getElementById("Locationhere").textContent = `Latitude: ${Latitude}, Longitude:${Longitude}`;
    const previousLocation = localStorage.getItem("previousLocation");
    if (previousLocation){
        const previousLocation = document.createElement("div");
        previousLocationDiv.textContent = `Previous Location: ${PreviousLocation}`;

        const welcomeBackMessage = document.createElement("h2");
        welcomeBackMessage.textContent = "Welcome back to the page!";

        const distanceInMeters =calculateDistance(Latitude, Longitude, previousLocation);
        const travvelDistanceDiv = document.createElement("div");
        travvelDistanceDiv.textContext = 'You traveled ${distanceInMeters} meters since your last visit.';

        document.getElementById("content").appendChild(welcomeBackMessage);
        document.getElementById("content").appendChild(previousLocationDiv);
        document.getElementById("content").appendChild(travelDistanceDiv);
    }else {
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.textContent = "Welcome to the page for the first time!";
        document.getElementById("content").appendChild(welcomeMessage);
    }
    localStorage.setItem("previousLocation", `${Latitude}, ${Longitude}`);
});

} else{ 
    document.getElementById("Locationhere").textContent = "GeoLocation is not available or blocked.";

}function calculateDistance(Lat1, Lon1, Lat2, Lon2,) {

}



