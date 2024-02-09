const firstCharUpperCase = require('../../firstCharUpperCase')

module.exports = (sliceName) => {
  return `export interface ${firstCharUpperCase(sliceName)}Schema {
  data: T
  isLoading: boolean
  error?: string
}`
}
