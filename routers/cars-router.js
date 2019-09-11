const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

// GET ALL ACCOUNTS
router.get("/", (req, res) => {
  db("cars")
    .then(cars => res.json(cars))
    .catch(error => res.status(500).json({ message: "Could not list cars" }));
});

// GET ACCOUNTS BY ID
router.get("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err =>
      res.status(500).json({ error: `Could not find a car with that ID` })
    );
});

// POST NEW ACCOUNT, REQUIRES DATA
router.post("/", (req, res) => {
  const postData = req.body;
  // validate the data before insert
  db("cars")
    .insert(postData, "id")
    .then(([id]) => {
      db("cars")
        .where({ id })
        .first()
        .then(account => {
          res.status(200).json({ message: "New car added!" });
        });
    })
    .catch(err =>
      res.status(500).json({ error: `Could not add a new car, try again!` })
    );
});

// UPDATE ACCOUNT WITH ID
router.put("/:id", (req, res) => {
  const updatePost = req.body;
  const { id } = req.params;
  db("cars")
    .where({ id })
    .update(updatePost)
    .then(car => {
      res.status(200).json({ message: `updated car ${id} with the changes` });
    })
    .catch(err =>
      res.status(500).json({ error: `Could not find a car with that ID` })
    );
});

// DELETE ACCOUNT WITH ID
router.delete("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then(car => {
      res.status(200).json({ message: `deleted car with ${id}` });
    })
    .catch(err => res.status(500).json({ error: `Could not delete the car` }));
});

module.exports = router;
