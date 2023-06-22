const express = require("express")
const { Router } = express
const router = new Router()
const ProductManager = require("../ProductManager")

const mongoose = require('mongoose');
const Cart = require("./dao/models/carts.model")
const Product = require("./dao/models/products.model")
const User = require("./dao/models/user.model")

router.get("/", (req, res)=>{
    Product.find({})
    .then((pr) =>{
        res.status(200).send({
            msg:"Los productos",
            data: pr
        })
    })
    .catch(err => {
        res.status(500).send({
            meg:"Error al obtener productos",
            data:err
        })
    })
})
router.post("/saveProduct", (req, res)=>{
    let newPr = req.body
    let product = new Product(newPr)
    product.save()
    .then((pr) =>{
        res.status(201).send({
            msg:"Producto guardado",
            data: pr
        })
    })
    .catch(err => console(err))

})

module.exports = router