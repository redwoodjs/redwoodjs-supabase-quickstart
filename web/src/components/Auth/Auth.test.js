import { render } from '@redwoodjs/testing/web'

import Auth from './Auth'

describe('Auth', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Auth />)
    }).not.toThrow()
  })
})
