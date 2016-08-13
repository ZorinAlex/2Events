var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.4423195, lng: 30.50771201},
        zoom: 15,
        disableDefaultUI: true
    });
    var contentString = '<div id="content">'+
        '<p><b>L&J </b> улица Тарасовская 14 офис 1А</p>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: {lat: 50.43972641, lng: 30.50754571},
        map: map,
        title: 'Мы тут!'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}






