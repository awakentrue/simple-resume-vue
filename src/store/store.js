import { createStore } from "vuex";
import { SetCurrentLanguage } from "./mutationsTypes.js";
import { getCurrentLanguage, getLanguages } from "../api/resumeService.js";

export default createStore({
  state: {
    currentLanguage: getCurrentLanguage(),
    languages: getLanguages(),
  },
  mutations: {
    [SetCurrentLanguage]: (state, language) => {
      state.currentLanguage = language;
    },
  },
});
