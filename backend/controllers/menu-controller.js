const db = require("../models");
const Menu = db.menu;
const Op = db.Sequelize.Op;

// Create and Save a new Menu
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Menu
  const menu = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Menu in the database
  Menu.create(menu)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Menu."
      });
    });
};

// Retrieve all Menus from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Menu.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Menus."
      });
    });
};

// Find a single Menu with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Menu.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Menu with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Menu with id=" + id
      });
    });
};

// Update a Menu by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Menu.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Menu was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Menu with id=${id}. Maybe Menu was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Menu with id=" + id
      });
    });
};

// Delete a Menu with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Menu.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Menu was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Menu with id=${id}. Maybe Menu was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Menu with id=" + id
      });
    });
};


// find all published Menus
exports.findAllPublished = (req, res) => {
  Menu.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Menus."
      });
    });
};