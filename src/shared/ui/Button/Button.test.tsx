import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('render with theme', () => {
    render(<Button theme='outline'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('outline')
    screen.debug()
  })
})
