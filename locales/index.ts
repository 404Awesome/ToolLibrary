import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

// 语言列表
export type Locale = keyof typeof localeList;
export const localeList = {
  zh: "简体中文",
  en: "英语"
}

// 当前区域设置
export let currentLocale = useStorage<Locale>("locale", (): Locale => {
  // 本地存储区域 || 本地系统区域
  let locale = localStorage.getItem("locale") || navigator.language;
  return Object.keys(localeList).includes(locale) ? locale as Locale : "en";
}, localStorage);

// i18n实例
export const i18n = createI18n({
  legacy: false,
  messages: { zh, en },
  globalInjection: true,
  locale: currentLocale.value
})

// 监听当前区域的改变, 调整i18n的区域设置
watch(currentLocale, (newLocale: Locale, oldLocale: Locale) => {
  if (Object.keys(localeList).includes(newLocale)) {
    i18n.global.locale.value = newLocale;
  } else {
    currentLocale.value = oldLocale;
  }
});

// 改变当前区域环境
export let changeLocale = () => {
  currentLocale.value = currentLocale.value === "zh" ? "en" : "zh";
}