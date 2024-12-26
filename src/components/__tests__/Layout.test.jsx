// src/components/__tests__/Layout.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import useNavbarStore from '../../stores/useNavbarStore'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({ pathname: '/test', key: '123' }),
    Outlet: () => <div data-testid="outlet">Outlet Content</div>
  }
})

vi.mock('../Logo', () => ({
  default: () => <div data-testid="logo">Logo</div>
}))

vi.mock('../NavBar', () => ({
  default: ({ currentPath }) => <div data-testid="navbar">{currentPath}</div>
}))

vi.mock('../Menu', () => ({
  default: () => <div data-testid="menu">Menu</div>
}))

vi.mock('../../stores/useNavbarStore')

describe('Layout', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    document.body.classList.remove('navbar-visible')
    vi.mocked(useNavbarStore).mockReturnValue({
      showNavbar: false,
      setShowNavbar: vi.fn()
    })
  })

  it('renders all components correctly', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('menu')).toBeInTheDocument()
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
  })

  it('passes correct path to NavBar', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    expect(screen.getByTestId('navbar')).toHaveTextContent('/test')
  })

  it('adds navbar-visible class when hasVisited is true', () => {
    localStorage.setItem('hasVisited', 'true')

    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    expect(document.body.classList.contains('navbar-visible')).toBe(true)
  })

  it('removes navbar-visible class when hasVisited is false', () => {
    document.body.classList.add('navbar-visible')

    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    expect(document.body.classList.contains('navbar-visible')).toBe(false)
  })

  it('adds navbar-visible class when showNavbar is true', () => {
    vi.mocked(useNavbarStore).mockReturnValue({
      showNavbar: true,
      setShowNavbar: vi.fn()
    })

    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )

    expect(document.body.classList.contains('navbar-visible')).toBe(true)
  })
})
