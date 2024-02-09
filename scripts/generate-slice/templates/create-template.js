const fs = require('fs/promises')
const firstCharUpperCase = require('../firstCharUpperCase')
const resolveRoot = require('../resolveRoot')
const createPublicApi = require('./create-public-api')
const createModel = require('./model-segment/create-model')
const createUi = require('./ui-segment/create-ui')

module.exports = async (options) => {
  const { layer, sliceName, isReduxSlice } = options

  try {
    await fs.mkdir(resolveRoot(layer, firstCharUpperCase(sliceName)))
  } catch (error) {
    console.log(`не удалось создать директорию для слайса ${sliceName}`, error)
  }

  await createUi(layer, sliceName)
  await createPublicApi(layer, sliceName, isReduxSlice)

  if (isReduxSlice) {
    await createModel(layer, sliceName)
  }
}
