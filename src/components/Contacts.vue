<template>
  <Title :text="contactsLabel" />
  <div v-if="phoneNumber" class="contact-line">
    <img src="@/assets/phone.svg" />
    <Paragraph class="contact" :text="phoneNumber" />
  </div>
  <div v-if="email" class="contact-line">
    <img src="@/assets/email.svg" />
    <Paragraph class="contact" :text="email" />
  </div>
  <div v-if="email" class="contact-line">
    <img src="@/assets/linkedin.svg" />
    <Paragraph class="contact" :text="linkedIn" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  name: "Contacts",

  components: { Title, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    contactsLabel() {
      return this.currentLanguage.resumeLabels.contacts;
    },

    contacts() {
      return this.currentLanguage.data.contacts;
    },

    phoneNumber() {
      return this.contacts.phone;
    },

    email() {
      return this.contacts.email;
    },

    linkedIn() {
      return this.contacts.linkedIn;
    },
  },
};
</script>

<style scoped>
.contact-line {
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.contact {
  padding-left: 1em;
  margin: 0.25em;
}
</style>
