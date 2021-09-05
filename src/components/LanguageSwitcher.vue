<template>
  <div class="language-switcher">
    <button class="selected-language unselectable-text" @click="toggleDropdown">
      <Headline class="selected-language-text" :text="currentLanguage.code" />
      <img src="@/assets/arrow.svg" />
    </button>
    <div v-if="dropDownIsVisible" class="dropdown" v-click-outside="clickOutsideDropdown">
      <button class="unselectable-text" v-for="lang in availableToSelectLanguages" :key="lang.name" @click="selectLanguage(lang)" >
        <Paragraph class="language" :class="{ 'current-language': currentLanguage.name == lang.name }" :text="lang.name" />
      </button>
    </div>
  </div>
</template>

<script>
import Headline from "@/components/Headline.vue";
import Paragraph from "@/components/Paragraph.vue";
import { SetCurrentLanguage } from "@/store/mutationsTypes.js";
import { mapMutations } from "vuex";

export default {
  Name: "LanguageSwitcher",

  components: { Headline, Paragraph },

  data() {
    return {
      dropDownIsVisible: false,
    };
  },

  computed: {
    languages() {
      return this.$store.state.languages;
    },

    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    availableToSelectLanguages() {
      return this.languages;
    },

    dropdownDisplay: {
      get() {
        return this.$refs.dropdown.style.display;
      },
      set(newValue) {
        this.$refs.dropdown.style.display = newValue;
      },
    },
  },

  methods: {
    ...mapMutations({
      setCurrentLanguage: SetCurrentLanguage,
    }),

    clickOutsideDropdown() {
      if (this.dropDownIsVisible) {
        this.toggleDropdown();
      }
    },

    toggleDropdown() {
      setTimeout(() => (this.dropDownIsVisible = !this.dropDownIsVisible), 50);
    },

    selectLanguage(language) {
      this.setCurrentLanguage(language);
      this.toggleDropdown();
    },
  },
};
</script>

<style scoped>
button {
  outline: none;
  border: none;
}

.language-switcher {
  display: flex;
  flex-direction: column;
}

.language-switcher .selected-language {
  padding: 10px;
  width: auto;
  border: none !important;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  display: flex;
}

.language-switcher .selected-language .selected-language-text {
  padding-left: 5px;
  text-transform: uppercase;
}

.language-switcher .selected-language:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-out;
}

.language-switcher .dropdown {
  position: absolute;
  background-color: #e4e4e6;
  width: 100px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
}

.language-switcher .dropdown button {
  text-align: left;
  border: none;
  background-color: #e4e4e6;
  cursor: pointer;
  width: 100%;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.language-switcher .dropdown button:last-child {
  border-bottom: 0;
}

.language-switcher .dropdown button:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-out;
}

.language {
  padding-left: 5px;
  font-weight: 600;
}

.current-language {
  color: #9f7051 !important;
}

.anim-options {
  transform: scale(9);
}

.unselectable-text {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
