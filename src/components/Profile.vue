<template>
  <Title :text="profileLabel" />
  <Paragraph :text="profile" />
</template>

<script>
import Title from "@/components/Title.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  name: "Profile",

  components: { Title, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    profileLabel() {
      return this.currentLanguage.resumeLabels.profile;
    },

    profile() {
      return this.currentLanguage.data.profile;
    },
  },
};
</script>
