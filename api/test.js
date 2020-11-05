// const jimp = require('jimp');
const db = require('../utils/db');
const { Donuts } = require('../utils/models');

module.exports = async (req, res) => {
    try {
        await db.connect();
        const donuts = await Donuts.find();
        res.status(200).json(donuts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Unable to fetch donuts' });
    }
}