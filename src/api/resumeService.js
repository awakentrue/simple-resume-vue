import enData from "../../resume/en-data.yaml";
import ruData from "../../resume/ru-data.yaml";

export const languages = [
  {
    name: "English",
    code: "en",
    data: enData,
    resumeLabels: {
      contacts: "Contacts",
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      professional: "Professional",
      education: "Education",
    },
  },
  {
    name: "Русский",
    code: "ru",
    data: ruData,
    resumeLabels: {
      contacts: "Контакты",
      profile: "Профиль",
      skills: "Навыки",
      experience: "Опыт работы",
      professional: "Профессиональные",
      education: "Образование",
    },
  },
];

export function getCurrentLanguage() {
  return languages[0];
}

export function getLanguages() {
  return languages;
}
