import { resolve } from 'path'
import { type Configuration, type RuleSetRule, DefinePlugin } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const src = resolve(__dirname, '..', '..', 'src')
  config.resolve!.modules!.push(src)
  config.resolve!.extensions!.push('.ts', '.tsx')

  // @ts-expect-error
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if(/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module!.rules.push(buildCssLoader(true))
  config.module!.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  })

  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('')
  }))

  return config
}
