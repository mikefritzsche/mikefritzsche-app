// src/components/__tests__/CardFooter.test.jsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CardFooter from '../CardFooter'

describe('CardFooter', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <CardFooter>Test Content</CardFooter>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <CardFooter className="custom-class">Test</CardFooter>
    )
    expect(container.firstChild).toHaveClass('card-footer', 'custom-class')
  })

  it('applies custom styles', () => {
    const { container } = render(
      <CardFooter style={{ backgroundColor: 'blue' }}>Test</CardFooter>
    )
    expect(container.firstChild).toHaveAttribute(
      'style',
      'background-color: blue;'
    )
  })
})
