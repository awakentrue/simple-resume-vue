<template>
  <div class="a4">
    <Resume />
  </div>
</template>

<script>
import Resume from "./components/Resume";

export default {
  name: "App",
  components: {
    Resume,
  },
};
</script>

<style>
@import '~@/assets/styles/fonts.css';

#app {
  box-sizing: border-box;
  font-family: "Raleway", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: "Raleway", sans-serif !important;
}

body {
  margin: 0;
  background: rgb(204, 204, 204);
}

.a4 {
  background: #e4e4e6;
  display: block;
  margin: 0 auto;
  margin-top: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  min-height: 29.7cm;
}

@media (max-width: 21cm) {
  .a4 {
    width: auto !important;
    min-height: auto !important;
    box-shadow: none !important;
    margin: 0 !important;
    margin-top: 0;
  }
}

@media print {
  .a4 {
    margin: 0;
    width: 25cm !important;
  }
}
</style>
