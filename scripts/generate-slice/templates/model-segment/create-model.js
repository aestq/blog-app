const fs = require('fs/promises')
const firstCharUpperCase = require('../../firstCharUpperCase')
const resolveRoot = require('../../resolveRoot')
const reduxSliceTemplate = require('./redux-slice-template')
const schemaSliceTemplate = require('./schema-slice-template')
const selectorsTemplate = require('./selectors-template')

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot(layer, sliceName, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath())
      await fs.mkdir(resolveModelPath('types'))
      await fs.mkdir(resolveModelPath('slice'))
      await fs.mkdir(resolveModelPath('selectors'))
      await fs.mkdir(resolveModelPath('services'))
    } catch {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName}`)
    }
  }

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slice', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName)
      )
    } catch {
      console.log('Не удалось создать Redux slice')
    }
  }

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${firstCharUpperCase(sliceName)}Schema.ts`),
        schemaSliceTemplate(sliceName)
      )
    } catch {
      console.log('Не удалось создать схему стейта')
    }
  }

  const createSelectors = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('selectors', `${sliceName}Selectors.ts`),
        selectorsTemplate(sliceName)
      )
    } catch {
      console.log('Не удалось создать схему стейта')
    }
  }

  await createModelStructure()
  await createReduxSlice()
  await createSchemaType()
  await createSelectors()
}
