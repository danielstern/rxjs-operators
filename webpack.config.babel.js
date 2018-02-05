import webpack from 'webpack';
import path from 'path';

export default {
    entry:{
        fromEvent:'./fromEvent/index.js',
        combineLatest:'./combineLatest/index.js'
    },
    output:{
        path: path.resolve(__dirname),
        publicPath:'/',
        filename:'[name]/bundle.js'
    },
    resolve:{
        extensions:['.js','.json']
    },
    module:{
        loaders:[{
            test: /\.js/,
            use:{
                loader:'babel-loader'
            }
        }]
    }
}