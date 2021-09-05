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
@font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway/Raleway-Regular.eot');
    src: local('Raleway'), local('Raleway-Regular'),
        url('/fonts/Raleway/Raleway-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Raleway/Raleway-Regular.woff2') format('woff2'),
        url('/fonts/Raleway/Raleway-Regular.woff') format('woff'),
        url('/fonts/Raleway/Raleway-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway/Raleway-ExtraBold.eot');
    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
        url('/fonts/Raleway/Raleway-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Raleway/Raleway-ExtraBold.woff2') format('woff2'),
        url('/fonts/Raleway/Raleway-ExtraBold.woff') format('woff'),
        url('/fonts/Raleway/Raleway-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway/Raleway-Medium.eot');
    src: local('Raleway Medium'), local('Raleway-Medium'),
        url('/fonts/Raleway/Raleway-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Raleway/Raleway-Medium.woff2') format('woff2'),
        url('/fonts/Raleway/Raleway-Medium.woff') format('woff'),
        url('/fonts/Raleway/Raleway-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway/Raleway-SemiBold.eot');
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url('/fonts/Raleway/Raleway-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Raleway/Raleway-SemiBold.woff2') format('woff2'),
        url('/fonts/Raleway/Raleway-SemiBold.woff') format('woff'),
        url('/fonts/Raleway/Raleway-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway/Raleway-Bold.eot');
    src: local('Raleway Bold'), local('Raleway-Bold'),
        url('/fonts/Raleway/Raleway-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Raleway/Raleway-Bold.woff2') format('woff2'),
        url('/fonts/Raleway/Raleway-Bold.woff') format('woff'),
        url('/fonts/Raleway/Raleway-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

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
