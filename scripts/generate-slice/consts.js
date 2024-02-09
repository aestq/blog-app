const layers = ['entities', 'features', 'widgets', 'pages']

const questions = [
  {
    type: 'list',
    name: 'layer',
    message: 'Specify a layer:',
    choices: layers
  },
  {
    type: 'input',
    name: 'sliceName',
    message: 'Slice name:',
    default: () => 'sliceName'
  },
  {
    type: 'confirm',
    message: 'Redux slice?',
    name: 'isReduxSlice'
  }
  // {
  //   type: 'confirm',
  //   message: 'RTK query?',
  //   name: 'isRTKQuery'
  // }
]

module.exports = {
  layers,
  questions
}
