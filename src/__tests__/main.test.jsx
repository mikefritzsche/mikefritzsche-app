// src/__tests__/main.test.jsx
import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { routes } from '../main'
import Layout from '../components/Layout'
import App from '../App'
import ResumePage from '../pages/ResumePage'
import ServicesPage from '../pages/ServicesPage'
import AboutPage from '../pages/AboutPage'


// Mock React DOM client
vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn()
  }))
}))

// Mock components
vi.mock('../components/Layout', () => ({
  default: ({ children }) => <div data-testid="layout">{children}</div>
}))

vi.mock('../App', () => ({
  default: () => <div data-testid="app">App</div>
}))

vi.mock('../pages/ResumePage', () => ({
  default: () => <div data-testid="resume">Resume</div>
}))

vi.mock('../pages/ServicesPage', () => ({
  default: () => <div data-testid="services">Services</div>
}))

vi.mock('../pages/AboutPage', () => ({
  default: () => <div data-testid="about">About</div>
}))

describe('Router Configuration', () => {
  const paths = ['/', '/resume', '/services', '/about']

  it('matches routes snapshot', () => {
    expect(routes).toMatchSnapshot()
  })
  it('matches rendered route snapshots', () => {
    paths.forEach(path => {
      const { container } = render(
        <MemoryRouter initialEntries={[path]}>
          <Layout>
            {path === '/' && <App />}
            {path === '/resume' && <ResumePage />}
            {path === '/services' && <ServicesPage />}
            {path === '/about' && <AboutPage />}
          </Layout>
        </MemoryRouter>
      )
      expect(container).toMatchSnapshot(`Route: ${path}`)
    })
  })
  it('verifies route paths', () => {
    const paths = ['/', '/resume', '/services', '/about']
    routes[0].children.forEach((route, index) => {
      expect(route.path).toBe(paths[index])
    })
  })

  it('verifies route components', () => {
    const routeComponents = routes[0].children.map(route => route.element)
    expect(routeComponents).toHaveLength(4)
  })
})
