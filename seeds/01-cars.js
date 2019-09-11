exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: `1JCCM85E5BT001312`,
          year: "1998",
          make: "Jeep",
          model: "CJ 5",
          mileage: "100,234",
          transmission: "manual",
          title: "salvaged"
        },
        {
          VIN: `4T1BG22K8VU176482`,
          year: "2001",
          make: "Toyota",
          model: "Camry",
          mileage: "76,002",
          transmission: "automatic",
          title: "clean"
        },
        {
          VIN: `WDBRN40J54A591238`,
          year: "2004",
          make: "Mercedes Benz",
          model: "C Class",
          mileage: "12,000",
          transmission: "manual",
          title: "clean"
        }
      ]);
    });
};
