const express = require('express');
const app = express();
const axios = require("axios")
const cors = require('cors')

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json())
app.use(cors())

let mysql = require('mysql');
const {
  isEmptyObject
} = require('jquery');

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "countries",
  multipleStatements: true
})

connection.connect(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Conexion correcta")
  }
});



const countries = "https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;population;numericCode";
const limit = 10;

app.get("/getData", (req, res) => {
  axios.get("https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;population;numericCode").then(function (response) {
    let datacountries = []
    for (let index = 0; index < limit; index++) {
      datacountries.push(response.data[Math.floor(Math.random() * response.data.length)])
    }


    res.json(datacountries);
  }).catch(function (error) {
    res.json("Error occured!")
  })
})

app.get("/countriesddbb", (req, res) => {
  let querySelect = "SELECT * FROM countries"
  connection.query(querySelect, function (error, result) {
    if (error) {
      respuesta = `Error: ${error}`
    } else {
      respuesta = result
    }
    res.send(respuesta)
  })
})


app.post("/getCities", (req, res) => {
  axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
    country: req.body.country
  }).then(function (response) {
    res.json(response.data);
  }).catch(function (error) {
    res.json("Error occured!")
  })
})


app.post("/country", (req, res) => {
  let params = [req.body.name, req.body.capital, req.body.region, req.body.population, req.body.numericCode, req.body.flag]
  let name = [req.body.name]

  let querySelect = "SELECT name FROM countries  WHERE name = ?"
  connection.query(querySelect, name, function (error, result) {
    if (error) {
      respuesta = `Error: ${error}`
    } else {
      if (result.length == 0) {
        let queryInsert = "INSERT INTO countries (id, name, capital, region, population, numericCode, flag) VALUES (NULL, ?, ?, ?, ?, ?, ?)"
        connection.query(queryInsert, params, function (error, result) {
          if (error) {
            respuesta = `Error: ${error}`
          } else if (result.length === 0) {
            respuesta = result
          } else {
            respuesta = result
          }
          res.send(respuesta)
        })
        
      } else {
        res.send(result)
      }

    }
  })

})

app.listen(3000);
