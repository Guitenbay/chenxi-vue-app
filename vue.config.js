module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    // 设置后端代理
    proxy: {
      // 将 `localhost:8080/api` 开头的 url 代理到下面的 target
      '/api': {
        target: 'http://www.cef103.tech/api/',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'APP | 晨曦';
      return args;
    });
  },
};
