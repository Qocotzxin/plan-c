<script lang="ts">
  import { onMount } from "svelte";
  import { icon } from "@fortawesome/fontawesome-svg-core";
  import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

  let darkMode = false;
  const THEME_KEY = "themePreference";
  const DARK = "dark";
  const LIGHT = "light";
  const ICON_CONTAINER = "#dark-mode-selector-icon";

  /**
   * Sets darkMode to the true or false and add corresponding class.
   * @param dark: boolean
   */
  function setDarkTheme(dark: boolean) {
    darkMode = dark;
    document.documentElement.classList.toggle(DARK, dark);
  }

  /**
   * Updates the switcher icon.
   */
  function setIcon() {
    const el = document.querySelector(ICON_CONTAINER);
    if (el.firstChild) {
      el.removeChild(el.firstChild);
    }
    document
      .querySelector(ICON_CONTAINER)
      .appendChild(icon(darkMode ? faSun : faMoon).node[0]);
  }

  /**
   * Toggles dark/light mode.
   */
  function toggleMode() {
    setDarkTheme(!darkMode);
    setIcon();
    window.localStorage.setItem(THEME_KEY, darkMode ? DARK : LIGHT);
  }

  onMount(() => {
    const theme = window.localStorage.getItem(THEME_KEY);
    if (
      theme === DARK ||
      (theme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme(true);
    }
    setIcon();
  });
</script>

<div
  class="fixed top-0 right-0 w-8 h-8 p-2 cursor-pointer z-50 flex justify-center items-center"
  id="dark-mode-selector-icon"
  on:click={toggleMode} />
