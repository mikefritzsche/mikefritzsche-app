// src/__tests__/App.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import App from '../App'
import useNavbarStore from '../stores/useNavbarStore'

vi.mock('../components/Logo', () => ({
  default: () => <div data-testid="logo">Logo</div>
}))

vi.mock('../pages/HomePage', () => ({
  default: () => <div data-testid="homepage">Homepage</div>
}))

vi.mock('../stores/useNavbarStore')

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows logo when showNavbar is false', () => {
    vi.mocked(useNavbarStore).mockImplementation(() => ({
      fadeOut: false,
      showNavbar: false,
      setFadeOut: vi.fn(),
      setShowNavbar: vi.fn()
    }))
    render(<App />)
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.queryByTestId('homepage')).not.toBeInTheDocument()
  })

  it('shows homepage when showNavbar is true', () => {
    vi.mocked(useNavbarStore).mockImplementation(() => ({
      fadeOut: false,
      showNavbar: true,
      setFadeOut: vi.fn(),
      setShowNavbar: vi.fn()
    }))
    render(<App />)
    expect(screen.getByTestId('homepage')).toBeInTheDocument()
    expect(screen.queryByTestId('logo')).not.toBeInTheDocument()
  })

  it('applies fade-out class when fadeOut is true', () => {
    vi.mocked(useNavbarStore).mockImplementation(() => ({
      fadeOut: true,
      showNavbar: false,
      setFadeOut: vi.fn(),
      setShowNavbar: vi.fn()
    }))
    render(<App />)
    const logoContainer = screen.getByTestId('logo').parentElement
    expect(logoContainer.className).toContain('fade-out')
  })
})
