// src/components/__tests__/Menu.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Menu from '../Menu'

// Mock MenuItem component
vi.mock('../MenuItem', () => ({
  default: ({ item }) => (
    <li data-testid={`menu-item-${item.title.toLowerCase()}`}>
      {item.title} - {item.route}
    </li>
  )
}))

describe('Menu', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )
  })

  it('renders menu container with correct class', () => {
    expect(screen.getByRole('list')).toHaveClass('menu')
  })

  it('renders all menu items', () => {
    expect(screen.getByTestId('menu-item-home')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-services')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-about')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-resume')).toBeInTheDocument()
  })

  it('passes correct props to MenuItem components', () => {
    const menuItems = [
      { title: 'Home', route: '/'},
      { title: 'Services', route: '/services' },
      { title: 'About', route: '/about' },
      { title: 'Resume', route: '/resume' },
    ]

    menuItems.forEach(item => {
      const menuItem = screen.getByTestId(`menu-item-${item.title.toLowerCase()}`)
      expect(menuItem).toHaveTextContent(item.title)
      expect(menuItem).toHaveTextContent(item.route)
    })
  })

  it('renders menu items in correct order', () => {
    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveTextContent('Home')
    expect(items[1]).toHaveTextContent('Services')
    expect(items[2]).toHaveTextContent('About')
    expect(items[3]).toHaveTextContent('Resume')
  })
})
