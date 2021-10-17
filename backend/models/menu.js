module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define("menu", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Menu;
};