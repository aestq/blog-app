import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resourcePath: string) => resourcePath.includes('.module.scss'),
              localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
            }
          }
        },
        "sass-loader",
      ],
    }
  ]
}