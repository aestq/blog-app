import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('collapsed sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    const sidebarToggle = screen.getByTestId('sidebar-toggle')
    expect(sidebar).toBeInTheDocument()
    fireEvent.click(sidebarToggle)
    expect(sidebar).toHaveClass('collapsed')
  })
})
