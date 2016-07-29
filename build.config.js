module.exports = {
    proxy:{
        enabled:false,
        domain:'http://boilerplate.dev'
    },
    site: {
        front: {
            assetsPath: 'app',
            publicPath: 'public/assets',
            cssoutputFolder: 'public/assets/css',
            jsoutputFolder: 'public/assets/js',

            app_files: {
                js: [],
                sass: ['application.scss'],
                css: [],
                copyfiles: [
                    [
                        ['app/assets/images/**'],
                        'public/assets/images'
                    ],
                    [
                        ['app/assets/svg/**'],
                        'public/assets/svg'
                    ],
                    [
                        [
                            'node_modules/font-awesome/fonts/*',
                            'app/assets/fonts/**/*'
                        ],
                        'public/assets/fonts'
                    ]
                ]
            }
        }
    },

    version: [
        './package.json'
    ]

};