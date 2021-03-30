const port = process.env.PORT || 3000
const productionHost = 'localhost'
const devMode = process.env.NODE_ENV === 'development'
const clientBundleUrl = devMode ? '//localhost:8080' : '' // devServerPort is 8080 in webpack.client.confing.js

export default {
  port: port,
  clientBundleUrl:`${clientBundleUrl}/scripts/bundle.js`,
  cssUrl: devMode ? '' : 'scripts/main.css'
};