const express = require('express');

const app = express();

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'dbhsdh',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: '',
            price: 4900,
            userId: 'dfgfdgdfg',
        }, {
            _id: 'dbhsdhfhrt',
            title: 'My 2nd thing',
            description: 'All of the info about my 2nd thing',
            imageUrl: '',
            price: 2900,
            userId: 'dfgfdgdfg',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;