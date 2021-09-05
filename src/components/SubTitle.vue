<template>
  <h2>{{ text }}</h2>
</template>

<script>
export default {
  Name: "SubTitle",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h2 {
  color: #9f7051;
  margin: 0 0 1em 0;
  line-height: 22px;
  letter-spacing: 4px;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
}
</style>
