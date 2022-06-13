import enData from "../../resume/en-data.yaml";
import ruData from "../../resume/ru-data.yaml";
import frData from "../../resume/fr-data.yaml";

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
    }
    },
    {
      name: "Français",
      code: "fr",
      data: frData,
      resumeLabels: {
        contacts: "Contacts",
        profile: "Profil",
        skills: "Compétences",
        experience: "Expérience",
        professional: "professionnelle",
        education : "Formation"
      }
  },
];

export function getCurrentLanguage() {
  return languages[0];
}

export function getLanguages() {
  return languages;
}
