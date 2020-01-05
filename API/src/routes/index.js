const { Router } = require('express');
const router = Router();
const hotels = require('../data');


router.get('/', (req, res) => {
    res.json(hotels);
});

router.get('/:id', (req, res) => {
    // buscar hotel
    const hotel = hotels.filter(h => {
        return h.id === req.params.id;
    });
    // devolver hotel
    res.json(hotel);
});

module.exports = router;
