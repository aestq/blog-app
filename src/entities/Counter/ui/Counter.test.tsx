import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderComponent } from 'shared/lib/tests/renderComponent'
import { Counter } from './Counter'

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
