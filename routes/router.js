const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index );
router.get('/blog', main.blog );
router.get('/cart', main.cart );
router.get('/category', main.category );
router.get('/checkout', main.checkout );
router.get('/confirmation', main.confirmation );
router.get('/contact', main.contact );
router.get('/elements', main.elements );
router.get('/login', main.login );
router.get('/single_blog', main.single_blog );
router.get('/single_product', main.single_product );
router.get('/tracking', main.tracking );

router.get('/list', main.list);
router.post('/save', main.save );
router.get('/delete/:id', main.delete );
router.get('/edit/:id', main.edit );
router.post('/edit/:id', main.update );

// router.get('/prod_list', main.Plist);
// router.post('/prod_save', main.Psave );
// router.get('/prod_delete/:id', main.Pdelete );
// router.get('/prod_edit/:id', main.Pedit );
// router.post('/prod_edit/:id', main.Pupdate );
module.exports = router;