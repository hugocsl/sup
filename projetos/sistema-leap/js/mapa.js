var map = L.map('map').setView([51.5, -0.09], 9);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var pop = L.popup({offset:[0, 100], closeButton:false}).setContent('test');
console.log('1', pop);

marker.bindPopup(pop);
marker.on('mouseover', function () {console.log('3', pop)});

console.log('2', pop);

setInterval(function () {
  pop.options.closeButton = !pop.options.closeButton;
}, 1000);