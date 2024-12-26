// src/components/__tests__/Card.test.jsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from '../Card'

describe('Card', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <Card>Test Content</Card>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('has correct class', () => {
    const { container } = render(
      <Card>Test</Card>
    )
    expect(container.firstChild).toHaveClass('card')
  })
})
