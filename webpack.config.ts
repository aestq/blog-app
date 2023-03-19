import { type Configuration } from 'webpack'
import { resolve } from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    build: resolve(__dirname, 'build'),
    entry: resolve(__dirname, 'src', 'index.tsx'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src')
  }

  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const PORT = env.port ?? 3000

  const config: Configuration = buildWebpackConfig({
    mode, paths, isDev, port: PORT
  })

  return config
}
