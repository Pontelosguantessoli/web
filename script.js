function initMap() {
    var myLatLng = {lat: 19.4008, lng: -99.1924}; 

    var map = new google.maps.Map(document.getElementById('mapa'), {
        center: myLatLng,
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ponte los Guantes Soli'
    });
}


