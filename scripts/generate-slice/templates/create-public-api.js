const fs = require('fs/promises')
const firstCharUpperCase = require('../firstCharUpperCase')
const resolveRoot = require('../resolveRoot')

module.exports = async (layer, sliceName, isReduxSlice) => {
  const componentName = firstCharUpperCase(sliceName)

  const getExports = () => {
    let base = `export { ${componentName} } from './ui/${componentName}/${componentName}'`

    if (isReduxSlice) {
      base += `\nexport type { ${componentName}Schema } from './model/types/${componentName}Schema'`
    }
    return base
  }

  try {
    await fs.writeFile(
      resolveRoot(layer, sliceName, 'index.ts'),
      getExports()
    )
  } catch (error) {
    console.log('Не удалось создать public api', error)
  }
}
