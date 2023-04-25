const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get('/', async (req, res)=>{
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.3777&lon=49.8920&units=metric&appid=9161e24f7473156ec9b6612da2fca736");
    data = await response.json();
    // res.send(data)
    res.render('index', data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 