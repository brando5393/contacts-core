const { app, BrowserWindow, dialog, Menu } = require("electron");
const path = require("path");
const db = require("./config/database.js");
const menu = require("./mainAppMenu.js");

// ENVIRONMENT CHECKS
process.env.NODE_ENV = "development";
const isDev = process.env.NODE_ENV !== "production" ? true : false;
const isMac = process.platform === "darwin" ? true : false;

// APP CODE START

const createMainWindow = () => {
  const window = new BrowserWindow({
    height: 800,
    width: 1200,
    title: "Contacts Core",
    resizable: isDev,
    webPreferences: {
      preload: path.resolve(__dirname, "./preload.js"),
    },
  });
  window.loadFile("./src/public/views/index.html");
};

app.on("ready", (err) => {
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
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

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
