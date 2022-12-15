"use strict";

const fs = require('fs');

const output_product = function(product){
    const recordToHTML = record => { 
        const fields = record.split(",");
        let html = fs.readFileSync("produkt_rx5600xt.html","utf-8");

        fields.forEach((field, index) => {
            
            html = html.replaceAll(`\{fields[${index}]}`, field);
        });

        return html;
    }

    const pages = products
    .filter(row => row !== "")
    .map(recordToHTML);
    
    return (pages[product]);
};

module.exports = convertToHTML;