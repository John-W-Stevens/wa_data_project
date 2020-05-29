const LocationController = require("../controllers/location.controller");

module.exports = function(app){
    app.get("/api/locations", LocationController.findAllLocations);
    app.post("/api/location", LocationController.createLocation);
    app.get("/api/location/:id", LocationController.findOneSingleLocation);
    app.put("/api/location/:id", LocationController.updateLocation);
    app.delete("/api/location/:id", LocationController.deleteLocation);
}
