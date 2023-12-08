const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const path = require('path')
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook-addon-state',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: (config: any) => {
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    )
    config.resolve.alias = {
      ...config.resolve.alias,
      'next-i18next': 'react-i18next',
    }

    return config
  },
}

//https://github.com/MarikaKonturova/inctagram-v2/blob/main/config/storybook/main.js
// const config: StorybookConfig = {
//     stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//     addons: [
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-interactions',
//         {
//             name: '@storybook/addon-styling',
//             options: {},
//         },
//     ],
//     framework: {
//         name: '@storybook/nextjs',
//         options: {},
//     },
//     docs: {
//         autodocs: 'tag',
//     },
// }
// export default config

// import { dirname, join } from 'path'
// import { StorybookConfig } from '@storybook/react-vite'
//
// const config: StorybookConfig = {
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
//   addons: [
//     getAbsolutePath('@storybook/addon-links'),
//     getAbsolutePath('@storybook/addon-interactions'),
//     getAbsolutePath('@storybook/addon-essentials'),
//   ],
//   framework: {
//     name: getAbsolutePath('@storybook/nextjs'),
//     options: {},
//   },
//   docs: {
//     autodocs: true,
//   },
//   viteFinal: config => {
//     config.build = config.build || {}
//     config.build.sourcemap = false
//     return config
//   },
// }
// export default config
//
// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, 'package.json')))
// }
