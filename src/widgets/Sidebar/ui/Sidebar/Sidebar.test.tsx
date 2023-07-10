import { fireEvent, screen } from '@testing-library/react'
import { renderComponent } from 'shared/lib/tests/renderComponent'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('render', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('collapsed sidebar', () => {
    renderComponent(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    const sidebarToggle = screen.getByTestId('sidebar-toggle')
    expect(sidebar).toBeInTheDocument()
    fireEvent.click(sidebarToggle)
    expect(sidebar).toHaveClass('collapsed')
  })
})
