const user = require('../models/UserModels');
const main = {
    index:(req, res) =>{
        res.render('index');
        
    },
    blog:(req, res) =>{
        res.render('blog');
        
    },
    cart:(req, res) =>{
        res.render('cart');
        
    },
    category:(req, res) =>{
        res.render('category');
        
    },
    checkout:(req, res) =>{
        res.render('checkout');
        
    },
    confirmation:(req, res) =>{
        res.render('confirmation');
        
    },
    contact:(req, res) =>{
        res.render('contact');
        
    },
    elements:(req, res) =>{
        res.render('elements');
        
    },
    login:(req, res) =>{
        res.render('login');
        
    },
    single_blog:(req, res) =>{
        res.render('single-blog');
        
    },
    single_product:(req, res) =>{
        res.render('single-product');
        
    },
    tracking:(req, res) =>{
        res.render('tracking');
        
    },




    list:(req, res) =>{
        user.getAll((err, result) =>{
            if(err) throw err;
            res.render('list', { users : result});
        })
    },
    delete:(req, res) =>{
        const id = req.params.id;
        user.delete(id, (err) =>{
            if(err) throw err;
            res.redirect('/list');
        })
    },
    edit:(req, res) =>{
        const id = req.params.id;
        user.getUser(id, (err, results) =>{
           if(err) throw err;
            res.render('edit', {user:results[0]});
        });
    },
    update: (req, res) =>{
        const id = req.params.id;
        const data = req.body;
        user.update(id, data, (err) =>{
            if(err) throw err;
            res.redirect('/list');
        })
    },
    save:(req, res) =>{
        const data = req.body;
        user.save(data, (err) => {
            if(err) throw err;
            res.redirect('/list'); 
        }) 
    },



    // Plist:(req, res) =>{
    //     user.getAllProduct((err, result) =>{
    //         if(err) throw err;
    //         res.render('list', { users : result});
    //     })
    // },
    // Pdelete:(req, res) =>{
    //     const id = req.params.id;
    //     user.deleteProduct(id, (err) =>{
    //         if(err) throw err;
    //         res.redirect('/prod_list');
    //     })
    // },
    // Pedit:(req, res) =>{
    //     const id = req.params.id;
    //     user.getProduct(id, (err, results) =>{
    //        if(err) throw err;
    //         res.render('edit', {user:results[0]});
    //     });
    // },
    // Pupdate: (req, res) =>{
    //     const id = req.params.id;
    //     const data = req.body;
    //     user.updateProduct(id, data, (err) =>{
    //         if(err) throw err;
    //         res.redirect('/prod_list');
    //     })
    // },
    // Psave:(req, res) =>{
    //     const data = req.body;
    //     user.saveProduct(data, (err) => {
    //         if(err) throw err;
    //         res.redirect('/prod_list'); 
    //     }) 
    // },
};
module.exports = main;