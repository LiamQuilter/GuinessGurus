<!-- <template>
    <div>
      <div id="map" style="height: 500px;"></div>
      <pre id="request"></pre>
      <pre id="response"></pre>
    </div>
  </template>

<script>
</script> -->



<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useGeolocation } from '../useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
const GOOGLE_MAPS_API_KEY = 'AIzaSyA6elK6y7iSn2wZu5kvEsU-1fgqMJt_86o'
export default {
  name: 'App',
  setup() {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    const otherPos = ref(null)
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    let map = ref(null)
    let clickListener = null
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7
      })
      clickListener = map.value.addListener(
        'click',
        ({ latLng: { lat, lng } }) => {
          (otherPos.value = { lat: lat(), lng: lng() });
            console.log("hello");
            console.log(lat(), lng());
            console.log()
        }
      )



      //------------------------------
        var origin1 = new google.maps.LatLng(55.930385, -3.118425);
        var origin2 = 'Greenwich, England';
        var destinationA = '11 Forster St, Galway, H91 P65D';
        var destinationB = new google.maps.LatLng(50.087692, 14.421150);

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
        {
            origins: [origin1, origin2],
            destinations: [destinationA, destinationB],
            travelMode: 'WALKING'
            }, callback);

function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
  console.log("result from api call");
  console.log(response);
}

      //----------------------------------
    })
    onUnmounted(async () => {
      if (clickListener) clickListener.remove()
    })
    let line = null
    watch([map, currPos, otherPos], () => {
      if (line) line.setMap(null)
      if (map.value && otherPos.value != null)
        line = new google.maps.Polyline({
          path: [currPos.value, otherPos.value],
          map: map.value
        })
    })
    const haversineDistance = (pos1, pos2) => {
      const R = 3958.8 // Radius of the Earth in miles
      const rlat1 = pos1.lat * (Math.PI / 180) // Convert degrees to radians
      const rlat2 = pos2.lat * (Math.PI / 180) // Convert degrees to radians
      const difflat = rlat2 - rlat1 // Radian difference (latitudes)
      const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180) // Radian difference (longitudes)
      const d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
              Math.cos(rlat1) *
                Math.cos(rlat2) *
                Math.sin(difflon / 2) *
                Math.sin(difflon / 2)
          )
        )
      return d
    }
    const distance = computed(() =>
      otherPos.value === null
        ? 0
        : haversineDistance(currPos.value, otherPos.value)
    )

    //make a call to the distance matrix api
    //-------------------------------------------------------------
//     var origin1 = new google.maps.LatLng(55.930385, -3.118425);
// var origin2 = 'Greenwich, England';
// var destinationA = 'Stockholm, Sweden';
// var destinationB = new google.maps.LatLng(50.087692, 14.421150);

// var service = new google.maps.DistanceMatrixService();
// service.getDistanceMatrix(
//   {
//     origins: [origin1, origin2],
//     destinations: [destinationA, destinationB],
//     travelMode: 'DRIVING',
//     transitOptions: TransitOptions,
//     drivingOptions: DrivingOptions,
//     unitSystem: UnitSystem,
//     avoidHighways: Boolean,
//     avoidTolls: Boolean,
//   }, callback);

// function callback(response, status) {
//   // See Parsing the Results for
//   // the basics of a callback function.
//   console.log("result from api call");

// }




    //------------------------------------------------------------
    return { currPos, otherPos, distance, mapDiv }
  }
}


// src="https://polyfill.io/v3/polyfill.min.js?features=default">
//         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
//       defer
</script>

<template>
    <div class="d-flex text-center" style="height: 20vh">
      <div class="m-auto">
        <h4>Your Position</h4>
        Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
        {{ currPos.lng.toFixed(2) }}
      </div>
      <div class="m-auto">
        <h4>Distance</h4>
        {{ distance.toFixed(2) }} miles
      </div>
      <div class="m-auto">
        <h4>Clicked Position</h4>
        <span v-if="otherPos">
          Latitude: {{ otherPos.lat.toFixed(2) }}, Longitude:
          {{ otherPos.lng.toFixed(2) }}
        </span>
        <span v-else>Click the map to select a position</span>
      </div>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
  </template>