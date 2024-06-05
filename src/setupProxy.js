// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/crud_api", // Proxy path
//     createProxyMiddleware({
//       target: "https://apnaorganicstore.in", // Target backend server
//       changeOrigin: true,
//       pathRewrite: {
//         "^/crud_api/users.php": "/crud_api/users.php", // Path rewrite to match backend endpoint
//       },
//       onProxyReq: (proxyReq, req, res) => {
//         // Add custom headers to the request if needed
//         proxyReq.setHeader("Access-Control-Allow-Origin", "*");
//         proxyReq.setHeader(
//           "Access-Control-Allow-Methods",
//           "GET, POST, PUT, DELETE, OPTIONS"
//         );
//         proxyReq.setHeader(
//           "Access-Control-Allow-Headers",
//           "Content-Type, Authorization"
//         );
//       },
//     })
//   );
// };

// setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/crud_api",
    createProxyMiddleware({
      target: "https://apnaorganicstore.in",
      changeOrigin: true,
      // Optionally, you can also set up authentication for the proxy
      // auth: 'your-proxy-username:your-proxy-password',
    })
  );
};
