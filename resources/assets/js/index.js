console.log('hello')

const { ipcRenderer } = require("electron");
const exitApp = document.getElementById("exitApp");
exitApp.addEventListener("click", () => {
  ipcRenderer.send("close-me");
});