// viewEngine.js
const express = require("express");
const path = require("node:path");
const { engine } = require('express-handlebars');
const helper = require('../helper/hbsHelper');

const configViewEngine = (app) => {
    app.engine('.hbs', engine({
        extname: '.hbs',
        layoutsDir: path.join(__dirname, '../views/layouts'),
        partialsDir: [
            path.join(__dirname, '../views/components'),
            path.join(__dirname, '../views/header')
        ],
        helpers: helper
    }));
    app.set('view engine', '.hbs');

    app.set('views', path.join(__dirname, '../views'));
    app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = configViewEngine;
