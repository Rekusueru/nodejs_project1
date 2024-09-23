const db = require('../config/db');
const user = {
    save:(data, callback) =>{
        const query = 'insert into user (first_name, last_name) values (?,?)';
        db.query(query, [data.fname, data.lname], callback);
    },
    getUser:(id, callback) =>{
        const query = 'select * from user where id=?';
        db.query(query, [id],callback);
    },
    getAll:(callback) =>{
        const query = 'select * from user';
        db.query(query, callback);
    },
    delete:(id, callback) =>{
        const query = 'delete from user where id=?';
        db.query(query, [id], callback);
    },
    update:(id, data, callback) =>{
        const query = 'update user set first_name=?, last_name=? where id=?';
        db.query(query, [data.fname, data.lname, id], callback);
    },




    // getProduct:(id, callback) =>{
    //     const query = 'select * from products where id=?';
    //     db.query(query, [id],callback);
    // },
    // getAllProduct:(callback) =>{
    //     const query = 'select * from products';
    //     db.query(query, callback);
    // },
    // saveProduct:(data, callback) =>{
    //     const query = 'insert into products (product_img, product_name, product_price) values (?,?,?)';
    //     db.query(query, [data.prodIMG, data.prodName, data.prodPrice], callback);
    // },
    // deleteProduct:(id, callback) =>{
    //     const query = 'delete from products where id=?';
    //     db.query(query, [id], callback);
    // },
    // updateProduct:(id, data, callback) =>{
    //     const query = 'update products set product_img=?, product_name=? , product_price=? where id=?';
    //     db.query(query, [data.prodIMG, data.prodName, data.prodPrice, id], callback);
    // },
};

module.exports = user;