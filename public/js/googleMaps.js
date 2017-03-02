function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.880, lng:-117.236};

  var cicc = {lat:32.8850, lng:-117.2413};
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cicc,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: cicc,
      map: map,
      title: 'CICC'
  });
}