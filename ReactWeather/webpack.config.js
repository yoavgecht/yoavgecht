module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                use: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-0']
                    },
                }],
                test: /\.jsx?$/, 
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
  },
  devtool: 'inline-source-map'
};