<template>
  <div>
    <select v-model="selectedLocation" @change="drawPolyline">
      <option disabled value="">Select a location</option>
      <option v-for="(location, index) in locations" :key="index" :value="location">{{ location.name }}</option>
    </select>
    <GoogleMap
      v-if="currPos"
      api-key="AIzaSyA6elK6y7iSn2wZu5kvEsU-1fgqMJt_86o"
      :center="center"
      :zoom="15"
      :styles="mapStyles"
      style="width: 100%; height: 500px"
      @load="onMapLoad"
    >
      <Marker :options="{ position: currPos, icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' }" />
      <MarkerCluster>
  <div>
    <Marker
      v-for="(location, i) in locations"
      :options="{ position: location, label: `${location.name} (${getDistance(currPos, location)} km)`, icon: null }"
      :key="i"
      v-show="!selectedLocation || selectedLocation.name === location.name"
    />
  </div>
</MarkerCluster>
      <!-- Polylines should be defined inside the <GoogleMap> component -->
      <Polyline
        v-for="(polyline, index) in polylines"
        :options="{ path: polyline.path, strokeColor: 'BLACK', strokeOpacity: 1.0, strokeWeight: 2 }"
        :key="index"
      />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { GoogleMap, Marker, MarkerCluster, Polyline } from "vue3-google-map";
import { useGeolocation } from "../useGeolocation";

export default defineComponent({
  name: "App",
  components: { GoogleMap, Marker, MarkerCluster, Polyline },
  setup() {
    const { coords } = useGeolocation();
    const center = computed(() => ({
      lat: coords.value ? coords.value.latitude : 53.278195,
      lng: coords.value ? coords.value.longitude : -9.060110,
    }));
    const currPos = computed(() => ({
      lat: coords.value ? coords.value.latitude : 53.278195,
      lng: coords.value ? coords.value.longitude : -9.060110,
    }));
    const mapStyles = [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ];

    const locations = [
      { lat: 53.274527, lng: -9.047445, name: "Pucan" },
      { lat: 53.271781, lng: -9.054982, name: "Seven" },
      { lat: 53.270159, lng: -9.058355, name: "Taylors" },
      { lat: 53.271646, lng: -9.054319, name: "Buskers" },
      { lat: 53.271662, lng: -9.054104, name: "Front Door" },
      { lat: 53.275362, lng: -9.049395, name: "Mc Gettigans" },
      { lat: 53.272363, lng: -9.053126, name: "Taaffes" },
      { lat: 53.27236, lng: -9.053549, name: "Tig Coili" },
      { lat: 53.272135, lng: -9.053305, name: "Kings Head" },
      { lat: 53.272485, lng: -9.062739, name: "Cookes" },
      { lat: 53.271815, lng: -9.053436, name: "Freeneys" },
      { lat: 53.275685, lng: -9.063187, name: "Sliding Rock" },
    ];

    const polylines = reactive([]);

    const getDistance = (pos1, pos2) => {
      const R = 6371; // Earth's radius in km
      const dLat = (pos2.lat - pos1.lat) * Math.PI / 180;
      const dLon = (pos2.lng - pos1.lng) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(pos1.lat * Math.PI / 180) * Math.cos(pos2.lat * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = R * c;
      return distance.toFixed(2); // Return distance in km with 2 decimal places
    };

    const selectedLocation = reactive({});

    const onMapLoad = (map) => {
      // Do something when the map is loaded
    };

    const drawPolyline = () => {
      if (!selectedLocation.lat) {
        return;
      }

      const polylinePath = [
        { lat: currPos.value.lat, lng: currPos.value.lng },
        { lat: selectedLocation.lat, lng: selectedLocation.lng },
      ];

      polylines.splice(0, polylines.length, polylinePath);
    };

    return {
      coords,
      center,
      currPos,
      mapStyles,
      locations,
      selectedLocation,
      onMapLoad,
      getDistance,
      drawPolyline,
      polylines,
    };
  },
});

</script>







