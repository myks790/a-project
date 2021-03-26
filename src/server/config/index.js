const port = process.env.PORT || 3000;
const productionHost = 'localhost'
const clientBundleUrl = process.env.NODE_ENV === 'development' ? '//localhost:8080' : '';

export default {
  port: port,
  clientBundleUrl:`${clientBundleUrl}/scripts/bundle.js`,
};