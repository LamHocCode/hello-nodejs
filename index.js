import express from "express";

const app = express();


app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/jenkins", (res) => {
    res.send("Tích hợp vào github bằng webhooks")
}   

)

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
