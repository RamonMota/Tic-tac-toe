export const THEMES = Object.freeze({
  DARK: "dark",
  LIGHT: "light",
  RETRO: "retro",
});

export const THEME_LIST = Object.freeze([
  THEMES.DARK,
  THEMES.LIGHT,
  THEMES.RETRO,
]);

export function coerceTheme(value, fallback = THEMES.LIGHT) {
  return THEME_LIST.includes(value) ? value : fallback;
}
