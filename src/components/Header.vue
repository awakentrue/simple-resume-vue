<template>
  <LanguageSwitcher class="language-switcher" />
  <div class="box">
    <div class="person-info">
      <Title class="person-info-name" :text="fullName" />
      <SubTitle class="person-info-position" :text="position" />
    </div>
    <div class="person-photo">
      <img class="person-photo-image" src="~@/assets/photo.png" />
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";

export default {
  Name: "Header",

  components: { LanguageSwitcher, Title, SubTitle },

  computed: {
    currentResumeData() {
      return this.$store.state.currentLanguage.data;
    },

    fullName() {
      const data = this.currentResumeData;
      const firstName = data.name["first"];
      const lastName = data.name["last"];
      return `${firstName} ${lastName}`;
    },

    position() {
      return this.currentResumeData.position;
    },
  },
};
</script>

<style scoped>
.language-switcher {
  position: absolute;
  padding: 10px;
}

.person-info {
  display: flex;
  flex-direction: column;
}

.person-info-name {
  margin: 0;
  font-weight: 800;
  font-size: 2em;
}

.person-info-position {
  margin: 0px;
}

.box {
  padding: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.person-photo {
}

.person-photo-image {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

@media (max-width: 21cm) {
  .box {
    padding-top: 20px;
    flex-direction: column-reverse;
  }

  .person-info {
    align-items: center;
    justify-content: center;
  }

  .person-photo {
    padding-bottom: 20px;
  }

  .person-info-name,
  .person-info-position {
    text-align: center;
  }
}

@media print {
  .language-switcher {
    display: none;
  }
}
</style>
