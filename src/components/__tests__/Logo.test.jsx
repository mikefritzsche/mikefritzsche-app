// src/components/__tests__/Logo.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Logo from '../Logo'

describe('Logo', () => {
  it('renders logo text correctly', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    )
    expect(screen.getByText('<Mike Fritzsche />')).toBeInTheDocument()
  })

  it('links to home page', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })
})
