const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use('/public', express.static('public'));

app.get('/', async (req, res)=>{
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.3777&lon=49.8920&units=metric&appid=9161e24f7473156ec9b6612da2fca736");
    data = await response.json();
    let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(data.dt * 1000);
    data.date=[d.getDate(), months[d.getMonth()], d.getFullYear(), days[d.getDay()]];
    data.hour=d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    // res.send(data)
    res.render('index', data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 