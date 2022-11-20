function initMap() {
  // The location of blueMountains
  const blueMountains = { lat: -33.469526002697016, lng: 150.50641660243517 };

  // The map, centered at blueMountains
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: blueMountains,
    zoomControl: false,
    streetViewControl: false,
  });
  // The marker, positioned at blueMountains
  const marker = new google.maps.Marker({
    position: blueMountains,
    map: map,
  });
}

window.initMap = initMap;