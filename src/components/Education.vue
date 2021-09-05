<template>
  <Title :text="educationLabel" />
  <section class="education-section" v-for="(education, index) in educations" :key="index">
    <Headline :text="education.degreeTitle" />
    <Paragraph :text="education.institutionName" />
    <Paragraph :text="education.studyDirection" />
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import Headline from "@/components/Headline.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  Name: "Education",

  components: { Title, Headline, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    educationLabel() {
      return this.currentLanguage.resumeLabels.education;
    },

    educations() {
      return this.currentLanguage.data.education;
    },
  },
};
</script>

<style scoped>
.education-section {
  margin-bottom: 2em;
}

.education-section:last-child {
  margin-bottom: 0;
}
</style>
