const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Contact = sequelize.define("contact", {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone1: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  phone2: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  birthday: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Contact.sync();

module.exports = Contact;
