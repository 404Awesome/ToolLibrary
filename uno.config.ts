import {
  presetUno,
  presetIcons,
  defineConfig,
  presetAttributify,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  rules: [
    ["font-smiley", { "font-family": "SmileySans" }]
  ],
  shortcuts: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  transformers: [transformerDirectives()],
})