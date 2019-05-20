function initialise() {

  //create the map object
  myMap = new L.map('mapid');

  // create the tile layer with correct attribution
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 16, attribution: osmAttrib});
  
  // start the map in Tokyo
  myMap.setView(new L.LatLng(35.6895, 139.69171),10); 
  myMap.addLayer(osm);


  //imgAttrib='Image data &copy; <a href="' + '">Wikimedia Commons</a> contributors';
  var wikiThumbPicAPI = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';
  var wikiPicAPI = 'https://upload.wikimedia.org/wikipedia/commons/';

  //create a specific popup for each image
  for (item in myData) {
    if (myData[item].latitude) {
      var ukiyoIcon = L.icon({
      iconUrl: String(wikiThumbPicAPI + myData[item].image),
      iconSize:[20, 20]
    });
      var LatIcon = parseFloat(myData[item].latitude);
      var LngIcon = parseFloat(myData[item].longitude);
      var marker = L.marker([LatIcon,LngIcon],{icon: ukiyoIcon, title: myData[item].title, keyboard:true, /*attribution:*/}).addTo(myMap)
      .bindPopup("<h1>" + myData[item].painting_index + "</h1></br><a href='" + wikiPicAPI + myData[item].imagethumb + "' target='_blank'><img src='" + wikiThumbPicAPI + myData[item].image + "'></a></br>" +
          "<p>" + "Title:</br>" + myData[item].title + "<p>" + "Depicted:</br>" + myData[item].depicted + "</p><p>" + "Remarks:</br>" + myData[item].remarks + "</p><p>" + "Date:</br>" + myData[item].date_of_painting  + "</p>");
        }
  }

}
