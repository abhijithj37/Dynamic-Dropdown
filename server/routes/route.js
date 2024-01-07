const express=require('express');
const client = require('../db/db');
const router=express.Router()


router.get('/country', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM country');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/state', async (req, res) => {
      try {
        const result = await client.query('SELECT * FROM state');
        res.json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
    router.get('/city', async (req, res) => {
      try {
      
        const result = await client.query('SELECT * FROM city');
        res.json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
    router.get('/village', async (req, res) => {
      try {
        const result = await client.query('SELECT * FROM village');
        res.json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  
    router.get('/block', async (req, res) => {
      try {
        const result = await client.query('SELECT * FROM block');
        res.json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

module.exports=router