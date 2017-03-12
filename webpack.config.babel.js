import path    from 'path'
import webpack from 'webpack'
import ETWP    from 'extract-text-webpack-plugin'

const DEBUG = process.argv.indexOf('--env.production') === -1 ? true : false;




const plugins = [
    new ETWP( '../css/styles.css' ), // Absolute path from /dist/js/app.js
    new webpack.DefinePlugin({
        PRODUCTION: (DEBUG === false),
        DEVELOPMENT: DEBUG,
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
]



let CSSLoaders = [];
if ( DEBUG === false ) {
    CSSLoaders = ETWP.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
    });
} else {
    CSSLoaders.push( 'style-loader' );
    CSSLoaders.push( 'css-loader' );
    CSSLoaders.push( 'sass-loader' );
}


/**
 * If DEBUG is set to FALSE we will compress and minify our codebase
 */
if ( DEBUG === false ) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false },
            sourceMap: true
        })
    );
}

export default {
    entry: {
        app: path.resolve(__dirname, 'src', 'js', 'app.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        publicPath: '/js/',
        filename: '[name].js'
    },

    /**
     * Webpack Dev Server
     */
    devServer: {
        port: 3333,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only'
    },

    /**
     * Allow ES6
     */
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: CSSLoaders
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    /**
     * Plugins
     */
    plugins: plugins,

    /**
     * Allow laziness
     * Modules:
     *  For each `import` keyword used throughout the app the directories
     *  set inside this array will automatically be looked into to see
     *  if we can resolve it there
     *
     * Alias:
     *  When using `import` keyword instead of dealing with crazy paths like
     *
     *  (NOTE: the '.js' and '.jsx' extensions are shown for clarity
     *  but is NOT needed in the real application)
     *  import coolModule from '../../modules/coolModule.js'
     *
     *  We simply do (from wherever in the application)
     *  import coolModule from 'modules/coolModule'
     *
     * Extensions:
     *  We are so lazy we will resolve files without having to
     *  mention the extensions
     */
    resolve: {
        modules: [
            path.resolve( __dirname, 'src', 'js' ),
            'node_modules'
        ],
        alias: {
            root: path.resolve( __dirname, 'src', 'js' ),
            sass: path.resolve( __dirname, 'src', 'sass' ),
            modules: path.resolve( __dirname, 'src', 'js', 'modules' ),
            components: path.resolve( __dirname, 'src', 'js', 'components' ),
        },
        extensions: ['.js', '.jsx']
    }
}
