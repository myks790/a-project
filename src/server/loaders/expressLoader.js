import routes from '../api';

export default (app) => {
  app.use('', routes());
};