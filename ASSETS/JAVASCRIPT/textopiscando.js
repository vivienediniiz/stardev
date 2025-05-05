const blinkText = document.getElementById("blinking-text");

setInterval(() => {
  blinkText.style.visibility = (blinkText.style.visibility === "hidden") ? "visible" : "hidden";
}, 500); // alterna visibilidade a cada 500ms
