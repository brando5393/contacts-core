const { app, BrowserWindow, dialog, menu } = require("electron");
const path = require("path");
const db = require("./config/database.js");

const createMainWindow = () => {
  const window = new BrowserWindow({
    height: 800,
    width: 1200,
    title: "Contacts Core",
    webPreferences: {
      preload: path.resolve(__dirname, "./preload.js"),
    },
  });
  window.loadFile("./src/views/index.html");
};

app.on("ready", (err) => {
  try {
    // db.connect();
    createMainWindow();
  } catch {
    err = JSON.stringify(err);
    console.log(
      dialog.showErrorBox(
        "Unable to launch Contacts Core",
        `Contacts Core was unable to start properly due to the following error: ${err}`
      )
    );
    app.quit();
  }
});
