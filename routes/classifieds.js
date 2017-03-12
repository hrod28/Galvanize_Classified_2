
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image')
    .orderBy('id', 'asc')
    .then((results)=>{
      res.json(results);
    })
    .catch((err)=>{
      res.send(err)
    });
});

router.get('/:id', (req, res, next)=>{
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image')
    .where({id: req.params.id})
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err)=>{
      res.send(err)
    });
});

router.post('/', (req, res, next) => {
  knex('classifieds')
    .insert({
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }, ['id', 'title', 'description', 'price', 'item_image'])
    .then((result)=>{
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err)
    });
});

router.patch('/:id', (req, res, next)=>{
  knex('classifieds')
    .update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }, ['id', 'title', 'description', 'price', 'item_image'])
    .where({id: req.params.id})
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err)
    });
});

router.delete('/:id', (req, res, next) =>{
  knex('classifieds')
    .where('id', req.params.id)
    .del()
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then((result)=>{
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err)
    });
});

module.exports = router;
