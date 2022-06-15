import React from "react";
import { GiBoomerangSun, GiMoonBats } from "react-icons/gi";
const ChangeTheme = () => {
  /*==================== DARK LIGHT THEME ====================*/
  const themeButton = document.getElementById("dark-button");
  const darkTheme = "dark-theme";
  const Icon = "GiMoonBats";
  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(Icon) ? "GiMoonBats" : "GiBoomerangSun";

  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "GiMoonBats" ? "add" : "remove"](
      Icon
    );
  }
  function handleTheme() {
    // Activate / deactivate the theme manually with the button
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(Icon);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  }
  return (
    <div className="menu-right-theme btns">
      {Icon && (
        <Icon
          className="change-theme"
          id="dark-button"
          size={27}
          onClick={handleTheme}
        />
      )}
    </div>
  );
};

export default ChangeTheme;
