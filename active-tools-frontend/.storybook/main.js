const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@storybook/addon-actions',
    // '@storybook/addon-viewport',
    // '@storybook/addon-docs',
    // '@storybook/addon-backgrounds',
    // '@storybook/addon-controls',
    // '@storybook/addon-toolbars',
    // '@storybook/addon-links',
    // '@storybook/addon-a11y',
    // 'storybook-addon-designs',
    // 'storybook-dark-mode',
    // '@storybook/addon-console'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  }
};