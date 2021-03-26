import express from 'express';
import path from 'path';
const route = express.Router();

export default (router) => {
  router.use('/scripts', route);
  route.use(express.static(path.join(__dirname, '/../client')));
  route.get('/*', function (req, res) {
    res.sendStatus(404);
  })
}