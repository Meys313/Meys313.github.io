function initMap() {
    var coordinates = {lat: 23.735166, lng: 90.392504},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 16
        });
};