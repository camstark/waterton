var mainmap = function(){

	//Create Initial Map View
	var map = new L.Map('map', {
		center: [49.099831, -113.955406], //[48.888166, -113.730090], // Glacier 48.860392, -113.844073  | 48.922017,-113.7589293 | 48.859714, -113.769229
		zoom: 16,
		maxZoom: 19,
		defaultExtentControl: true,
	});

	//Chose basemap tiles // Examples: http://leaflet-extras.github.io/leaflet-providers/preview/
	//L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', { //CartoDB light 
	//L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { // OpenTopo Map
	//L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', { //Not as good as thunderforest
	layer = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png').addTo(map);

	 
  function setBasemap(basemap) {
		if (layer) {
		  map.removeLayer(layer);
		}
		
		layer = L.tileLayer(basemap);
		map.addLayer(layer);
  }

  var basemaps = document.getElementById('basemaps');

  basemaps.addEventListener('change', function(){
    setBasemap(basemaps.value);
  });	 

lc =	L.control.locate({
				position: 'topleft',  // set the location of the control
				drawCircle: true,  // controls whether a circle is drawn that shows the uncertainty about the location
				follow: false,  // follow the user's location
				setView: true, // automatically sets the map view to the user's location, enabled if `follow` is true
				keepCurrentZoomLevel: false, // keep the current map zoom level when displaying the user's location. (if `false`, use maxZoom)
				stopFollowingOnDrag: false, // stop following when the map is dragged if `follow` is true (deprecated, see below)
				remainActive: false, // if true locate control remains active on click even if the user's location is in view.
				markerClass: L.circleMarker, // L.circleMarker or L.marker
				circleStyle: {},  // change the style of the circle around the user's location
				markerStyle: {},
				followCircleStyle: {},  // set difference for the style of the circle around the user's location while following
				followMarkerStyle: {},
				icon: 'fa fa-map-marker',  // class for icon, fa-location-arrow or fa-map-marker
				iconLoading: 'fa fa-spinner fa-spin',  // class for loading icon
				circlePadding: [0, 0], // padding around accuracy circle, value is passed to setBounds
				metric: true,  // use metric or imperial units
				onLocationError: function(err) {alert(err.message)},  // define an error callback function
				onLocationOutsideMapBounds:  function(context) { // called when outside map boundaries
						alert(context.options.strings.outsideMapBoundsMsg);
				},
				showPopup: true, // display a popup when the user click on the inner marker
				strings: {
					title: "Show me where I am",  // title of the locate control
					popup: "You are within {distance} {unit} from this point",  // text to appear if user clicks on circle
					outsideMapBoundsMsg: "You seem located outside the boundaries of the map" // default message for onLocationOutsideMapBounds
				},
				locateOptions: {}  // define location options e.g enableHighAccuracy: true or maxZoom: 10
			}).addTo(map);

//lc.start();	

};

$(document).ready(mainmap);









