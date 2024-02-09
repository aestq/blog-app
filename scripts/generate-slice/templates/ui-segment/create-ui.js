const fs = require('fs/promises')
const firstCharUpperCase = require('../../firstCharUpperCase')
const resolveRoot = require('../../resolveRoot')
const componentTemplate = require('./component-template')
const storyTemplate = require('./story-template')
const styleTemplate = require('./style-template')

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot(layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath())
    } catch {
      console.log('Не удалось создать ui директорию')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)
      await fs.mkdir(resolveUIPath(componentName))

      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName)
      )
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName)
      )
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName)
      )
    } catch {
      console.log('Не удалось создать компонент')
    }
  }
  await createUIDir()
  await createComponent()
}
