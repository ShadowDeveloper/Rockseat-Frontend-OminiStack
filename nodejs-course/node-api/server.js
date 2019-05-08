const exrpress = require('express');

const app = exrpress();

app.get("/", (req, res) => {
    res.send("Rodrigo");
})

app.listen(3001);