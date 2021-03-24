// Déclaration des extensions et constantes
const path = require('path');
const express = require('express');
const app = express();

//Définition du générateur de vue sur 'ejs'
app.set('view engine', 'ejs');

//Encodage du serveur
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Chargement des fichiers statiques 'public'
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
    res.render('index')
})


//Port d'écoute
app.listen(8080, () => {
    console.log('Port écouté: 8080');
})
