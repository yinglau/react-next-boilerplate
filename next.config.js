const withLess = require('@zeit/next-less')
module.exports = withLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }
        config.resolve.modules.push('src')
        
        return config
    },
    distDir: 'dist'
})
