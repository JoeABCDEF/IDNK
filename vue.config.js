module.exports = {
    publicPath : '/idnk',
    //反代理
    // devServer : {
    //     proxy : {
    //         // '/r':{
    //         //     //代理的网址
    //         //     target : 'http://139.9.33.193:3456',
    //         //     // ws: true, // 是否启用websockets
    //         //     changeOrigin : true,//反向代理要不要改变你的地址 就不会冲突
    //         //     pathRewrite: {
    //         //         '^/r': '' //路径重写
    //         //     }
    //         // },
    //         // '/_sen':{
    //         //     //代理的网址
    //         //     target : 'http://www.dutangapp.cn/',
    //         //     changeOrigin : true,//反向代理要不要改变你的地址 就不会冲突
    //         //     pathRewrite: {
    //         //         '^/_sen': '' //路径重写
    //         //     }
    //         // },
    //         // '/weather':{
    //         //     //代理的网址
    //         //     target : 'https://www.tianqiapi.com/api/',
    //         //     changeOrigin : true,//反向代理要不要改变你的地址 就不会冲突
    //         //     pathRewrite: {
    //         //         '^/weather': '' //路径重写
    //         //     }
    //         // }
    //     }
    // },
    css: {
        loaderOptions: {
          stylus: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    }
}