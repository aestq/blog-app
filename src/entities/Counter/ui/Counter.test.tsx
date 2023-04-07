import { renderComponent } from 'shared/lib/tests/renderComponent'
import { Counter } from './Counter'
import { userEvent, screen } from '@storybook/testing-library'

describe('Counter', () => {
  test('render counter', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    const valueTitle = screen.getByTestId('value-title')
    expect(valueTitle).toHaveTextContent('10')
  })

  test('increment', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    const valueTitle = screen.getByTestId('value-title')
    const incrementButton = screen.getByTestId('increment-button')
    userEvent.click(incrementButton)
    expect(valueTitle).toHaveTextContent('11')
  })

  test('decrement', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    const valueTitle = screen.getByTestId('value-title')
    const decrementButton = screen.getByTestId('decrement-button')
    userEvent.click(decrementButton)
    expect(valueTitle).toHaveTextContent('9')
  })
})
