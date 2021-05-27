<template>
  <div class="section">
    <div class="section-header">
      <div class="background"></div>
      <div class="foreground section-foreground">
        <div class="section-text-background">
          <h1 class="text-title section-text-title">1、庐山观音桥概况</h1>
        </div>
      </div>
    </div>
    <div id="map1"></div>
  </div>
</template>
<style scoped>
#map1 {
  height: 100%;
  width: 100%;
}
.section {
  height: 100vh;
  width: 100%;
  position: relative;
  padding-top: 60px;
}
.section-header {
  position: relative;
  width: 100%;
  height: 100px;
  z-index: 3;
}
.foreground.section-foreground {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
}
.section-text-title{
  font-size: 2em;
  font-family: MaShanZheng Regular;
  color:black;
}
.section-text-background {
    position:relative;
    top: 10%;
}
</style>
<script>
import mapboxgl from "mapbox-gl";
function initMap() {
  var map = new mapboxgl.Map({
    container: "map1",
    accessToken:
      "pk.eyJ1Ijoic3RlZWx3YWxsMjAxNCIsImEiOiJja29lMnhrOHQwODh2MnBxdHVidGxvNWZwIn0.L6wdCvml-M-nlMFc8eiyUg",
    style: "mapbox://styles/steelwall2014/ckp68dlnl1p2x18oxf2yfrv8x",
  });
  return map;
}

export default {
  data: function () {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = initMap();
  },
};
</script>
