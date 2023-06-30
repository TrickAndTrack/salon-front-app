const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors({
    origna: "http://localhost:3000/"

}));

app.get("/", (req, res) => {
    res.json({name:"Code ", subscribe:"true"})
});

app.listen(8091,()=> console.log("server is listingin on 8091"));

