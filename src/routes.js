const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    var array = [];
    
    await axios.get('http://localhost:3001/articles')
    .then(res => array = res.data.results)
    .catch(error => console.log(error));

    console.log(array);

    res.render('home', { array });
});
  
router.get('/category/:slug', async (req, res) => {
    const slug = req.params.slug;
    const category = slug;
    var array = [];

    await axios.get('http://localhost:3001/categories/' + slug)
    .then(res => array = res.data.results)
    .catch(error => console.log(error));

    console.log(array);

    res.render('category', { array, category });
});

router.get('/article/:slug', async (req, res) => {
    const slug = req.params.slug;
    var array = {};

    await axios.get('http://localhost:3001/articles/slug/' + slug)
    .then(res => array = res.data)
    .catch(error => console.log(error));

    console.log(array);

    res.render('article', { array });
});

module.exports = router;
  