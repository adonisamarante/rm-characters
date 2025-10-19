import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

import '../styles/styled.d.ts'

global.TextEncoder = TextEncoder as typeof global.TextEncoder
global.TextDecoder = TextDecoder as typeof global.TextDecoder

global.IntersectionObserver = class IntersectionObserver {
  root: Element | null = null
  rootMargin: string = '0px'
  thresholds: readonly number[] = [0]

  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
