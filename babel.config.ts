module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
    plugins: [
        "inline-svg",
        {
            "disableNamespaceIds": true,
            "svgo": {
                "plugins": [
                    {
                        "removeDimensions": true,
                    }
                ]

            }
        }
    ]
};