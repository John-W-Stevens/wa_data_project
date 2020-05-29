const mongoose = require("mongoose")

// this line enables validators to run on update
mongoose.set("runValidators", false);

mongoose.connect("mongodb://localhost/wa_census_data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))
