
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initGoogle() {
    initMap();
    initAutocomplete();
}

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

function addQuestion() {

}

function resetForm() {
    document.getElementById('autocomplete').value = "";
}

function submitLocation() {
    var address = document.getElementById('autocomplete').value;
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 }
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submitLocation').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

// Adds new marker to map 
function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('autocomplete').value;
    console.log("address is: ", address);
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                id: 1 // make this a unique id for every new marker 
            });
            marker.addListener('click', function () {
                displayForm(this.id);
            });
            resetForm();
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function displayForm(markerId) {
    console.log("marker clicked: ", markerId);
    document.getElementById("getStarted").style.display = "none";
    document.getElementById("locationSurvey").style.display = "inline";
}
// document.getElementById("groupSelectLabel").style.display = "none";

function addComment() {
    var node = document.createElement("P");
    var commentText = document.getElementById("newComment").value;
    var newComment = document.createTextNode(commentText);
    node.appendChild(newComment);
    document.getElementById("comments").appendChild(node);
    document.getElementById("newComment").value = "";
}