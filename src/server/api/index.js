import express from 'express';
import index from './routes';
import scripts from './routes/scripts';

export default () => {
  const router = express.Router();
  scripts(router);
  index(router);
  return router;
};