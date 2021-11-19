const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:4000",
            //target: "http://172.18.104.148:4000",
            changeOrigin: true,
            pathRewrite: { "^/api": "" },
        })
    );
};
