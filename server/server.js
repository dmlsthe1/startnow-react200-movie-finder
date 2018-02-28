const express = require('express');
const morgan = require('morgan');
const axios = require("axios");
const dotenv = require("dotenv").config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get("/search/:input", (req, res) => {
    const input = req.params.input;
    const apiKey = process.env.apiKey;
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`)
        .then((response) => {
            axios.all(response.data.Search.map((movie, index) => {
                return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
                    .then(response2 => {
                        return response2.data;
                    })
            })).then(entireMovie => {
                res.send(entireMovie);
            })
        }).catch(err => res.status(500).send("bad"));
});

module.exports = app;
