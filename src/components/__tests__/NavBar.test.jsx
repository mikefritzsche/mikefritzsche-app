// src/components/__tests__/NavBar.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'

// Mock useNavigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

describe('NavBar', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  const renderNavBar = (currentPath = '/') => {
    return render(
      <BrowserRouter>
        <NavBar currentPath={currentPath} />
      </BrowserRouter>
    )
  }

  it('renders logo text correctly', () => {
    renderNavBar()
    expect(screen.getByText('<Mike Fritzsche />')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    renderNavBar()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
  })

  it('highlights active navigation item', () => {
    renderNavBar('/about')
    const aboutItem = screen.getByText('About')
    expect(aboutItem).toHaveClass('active')
  })

  it('does not highlight inactive navigation items', () => {
    renderNavBar('/about')
    const homeItem = screen.getByText('Home')
    const servicesItem = screen.getByText('Services')
    const resumeItem = screen.getByText('Resume')

    expect(homeItem).not.toHaveClass('active')
    expect(servicesItem).not.toHaveClass('active')
    expect(resumeItem).not.toHaveClass('active')
  })

  it('toggles menu on mobile button click', () => {
    renderNavBar()
    const button = screen.getByRole('button')
    const menu = screen.getByRole('list')

    expect(menu).not.toHaveClass('menu-open')

    fireEvent.click(button)
    expect(menu).toHaveClass('menu-open')

    fireEvent.click(button)
    expect(menu).not.toHaveClass('menu-open')
  })

  it('toggles hamburger icon state', () => {
    renderNavBar()
    const button = screen.getByRole('button')
    const hamburger = button.querySelector('.hamburger')

    expect(hamburger).not.toHaveClass('open')

    fireEvent.click(button)
    expect(hamburger).toHaveClass('open')
  })

  it('handles navigation correctly', () => {
    renderNavBar()
    fireEvent.click(screen.getByText('About'))
    expect(mockNavigate).toHaveBeenCalledWith('/about')
  })

  it('closes menu after navigation', () => {
    renderNavBar()
    const button = screen.getByRole('button')

    // Open menu
    fireEvent.click(button)
    expect(screen.getByRole('list')).toHaveClass('menu-open')

    // Navigate
    fireEvent.click(screen.getByText('About'))
    expect(screen.getByRole('list')).not.toHaveClass('menu-open')
  })
})
