// src/components/__tests__/About.test.jsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../About'

describe('About Component', () => {
  beforeEach(() => {
    render(<About />)
  })

  it('renders all section titles correctly', () => {
    expect(screen.getByText('Professional Journey')).toBeInTheDocument()
    expect(screen.getByText('Technical Expertise')).toBeInTheDocument()
    expect(screen.getByText('Development Philosophy')).toBeInTheDocument()
    expect(screen.getByText('Beyond Coding')).toBeInTheDocument()
  })

  it('renders Professional Journey content', () => {
    expect(screen.getByText(/With over 9 years in web development/)).toBeInTheDocument()
  })

  it('renders Technical Expertise content', () => {
    expect(screen.getByText(/My core expertise lies in modern JavaScript frameworks/)).toBeInTheDocument()
  })

  it('renders Development Philosophy content', () => {
    expect(screen.getByText(/I believe in writing maintainable, scalable code/)).toBeInTheDocument()
  })

  it('renders Beyond Coding content', () => {
    expect(screen.getByText(/When I'm not coding/)).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    expect(document.querySelector('.about-container')).toBeInTheDocument()
    expect(document.querySelectorAll('.about-section')).toHaveLength(4)
    expect(document.querySelectorAll('.about-section__title')).toHaveLength(4)
    expect(document.querySelectorAll('.about-section__content')).toHaveLength(4)
  })
})
