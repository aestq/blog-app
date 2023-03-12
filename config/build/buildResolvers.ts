import webpack from 'webpack'
import {BuildOptions} from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index']
  }
}