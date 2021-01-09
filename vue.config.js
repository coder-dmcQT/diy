module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.s(cla)ss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            // Requires sass-loader@^8.0.0
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    indentedSyntax: true // optional
                                },
                            },
                        }
                    ]
                }
            ]
        }
    }
}