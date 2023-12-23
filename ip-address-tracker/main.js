const IPIFY_API_KEY = 'at_XMyLKmYFvr9xz8blHnE3bLuaY81IM';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGVvbm1pY2hhbGFrIiwiYSI6ImNrdTQ1MThkdTJ4dWUyb3A4MHR6eXlwcGoifQ.1TgXN8HncHOfoUGc_XCdKA';
const MAPBOX_USERNAME = 'leonmichalak';
const MAPBOX_STYLE = 'mapbox://styles/mapbox/streets-v11';

const MAPBOX_Z = 1;
const MAPBOX_X = 1;
const MAPBOX_Y = 1;

let lat = 0;
let lng = 0;

const ipAddress = document.getElementById('address');
const ipLocation = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');

const fetchIPDetails = async (address) => {
  let ipifyFetch;

  if (address) {
    ipifyFetch = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}&ipAddress=${address}&domain=${address}`
    );
  } else {
    ipifyFetch = await fetch(`https://geo.ipify.org/api/v1?apiKey=${IPIFY_API_KEY}`);
  }

  const ipifyJSON = await ipifyFetch.json();

  ipAddress.innerText = ipifyJSON.ip;
  ipAddress.classList.add('loaded');

  ipLocation.innerText = `${ipifyJSON.location.city}, ${ipifyJSON.location.country} ${ipifyJSON.location.postalCode}`;
  ipLocation.classList.add('loaded');

  timezone.innerText = `UTC ${ipifyJSON.location.timezone}`;
  timezone.classList.add('loaded');

  isp.innerText = ipifyJSON.isp;
  isp.classList.add('loaded');

  lat = ipifyJSON.location.lat;
  lng = ipifyJSON.location.lng;

  reRenderMap();
};

const submitForm = () => {
  const formField = document.getElementById('ip-field').value;

  if (!formField || formField.length < 1) {
    return;
  }

  fetchIPDetails(formField);
};

const reRenderMap = () => {
  locationMap.setView([lat, lng], locationMap.getZoom());
  L.marker([lat, lng], {
    icon: marker,
  }).addTo(locationMap);
};

// Initializing map
const locationMap = L.map('mapid', {
  center: [lat, lng],
  zoom: 13,
  zoomControl: false,
});

const marker = L.icon({
  iconUrl: './assets/icon-location.svg',
  iconSize: [46, 56],
});

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`, {
  attribution:
    '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/streets-v11',
  accessToken: MAPBOX_TOKEN,
}).addTo(locationMap);

L.marker([lat, lng], {
  icon: marker,
}).addTo(locationMap);

// Fetch users IP details on load
fetchIPDetails();
