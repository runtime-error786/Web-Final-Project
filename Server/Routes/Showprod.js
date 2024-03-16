const express = require('express');
const Showprod = express.Router();
const { MYSQL } = require("../Mysql");
const { Checkvalid } = require("../Middleware/Auth");

Showprod.get('/', Checkvalid, async (req, res) => {
    const search = req.query.search; 
    const sort = req.query.sort === 'true' ? 'ASC' : 'DESC';
    let page = parseInt(req.query.page); 
    page = page + 1;
    const perPage = parseInt(req.query.perPage) || 5; 

    const offset = Math.max((page - 1) * perPage, 0);

    const query = `
        SELECT id, name, company, quantity, price, description, category, imagepath
        FROM products 
        WHERE LOWER(name) LIKE LOWER(?) 
        ORDER BY name ${sort} 
        LIMIT ?, ?`;

    MYSQL.query(query, [`%${search}%`, offset, perPage], (err, results) => {
        if (err) {
            console.error("Error fetching products:", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        MYSQL.query("SELECT COUNT(*) AS total FROM products WHERE LOWER(name) LIKE LOWER(?)", [`%${search}%`], (err, countResult) => {
            if (err) {
                console.error("Error fetching total count:", err);
                return res.status(500).json({ error: "Internal server error" });
            }

            const total = countResult[0].total;
            const totalPages = Math.ceil(total / perPage); 

            res.json({ data: results, totalPages });
        });
    });
});

module.exports = Showprod;
