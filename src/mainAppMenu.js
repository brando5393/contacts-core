const { app } = require("electron");
const menu = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Contact",
        // click: openAddForm,
      },
      {
        label: "Edit Contact",
        // click: openEditForm,
      },
      {
        label: "Remove Contact",
        // click: openRemoveForm,
      },
      {
        label: "Export Contacts",
        // click: exportContacts,
      },
      {
        label: "Quit",
        click: app.quit,
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "View Documentation",
        // click: open new window to display readme file,
      },
      {
        label: "Report Issue",
        // click: open new window to issue page,
      },
      {
        label: "Visit Developer Site",
        // click: open new window to personal webpage
      },
    ],
  },
];

module.exports = menu;
