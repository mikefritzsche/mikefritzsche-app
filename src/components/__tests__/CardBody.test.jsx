// src/components/__tests__/CardBody.test.jsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CardBody from '../CardBody'

describe('CardBody', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <CardBody>Test Content</CardBody>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <CardBody className="custom-class">Test</CardBody>
    )
    expect(container.firstChild).toHaveClass('card-body', 'custom-class')
  })

  it('applies custom styles', () => {
    const { container } = render(
      <CardBody style={{ backgroundColor: 'red' }}>Test</CardBody>
    )
    expect(container.firstChild).toHaveAttribute(
      'style',
      'background-color: red;'
    )
  })
})
