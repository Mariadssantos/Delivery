import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({
        message: "foooooiiiiii"
    });
});

app.listen(3000, () => console.log("Server is running"));