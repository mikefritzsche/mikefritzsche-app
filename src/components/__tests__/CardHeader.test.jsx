// src/components/__tests__/CardHeader.test.jsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CardHeader from '../CardHeader'

describe('CardHeader', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <CardHeader>Test Content</CardHeader>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <CardHeader className="custom-class">Test</CardHeader>
    )
    expect(container.firstChild).toHaveClass('card-header', 'custom-class')
  })

  it('applies custom styles', () => {
    const { container } = render(
      <CardHeader style={{ backgroundColor: 'green' }}>Test</CardHeader>
    )
    expect(container.firstChild).toHaveAttribute(
      'style',
      'background-color: green;'
    )
  })
})
