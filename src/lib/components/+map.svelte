<script>
    import { onMount } from 'svelte';
  
    let map;
  
    onMount(() => {
      const mapOptions = {
        center: { lat: 51.759, lng: 19.457 }, // Coordinates for Łódź, Poland
        zoom: 12,
      };
  
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
  
      googleMapsScript.onload = () => {
        // @ts-ignore
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
      };
  
      document.head.appendChild(googleMapsScript);
    });
  </script>
  
  <div id="map" class="w-full h-96 rounded-lg shadow-md border" ></div>
  