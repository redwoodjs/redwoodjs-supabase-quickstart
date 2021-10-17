import { render } from '@redwoodjs/testing/web'

import Account from './Account'

describe('Account', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Account />)
    }).not.toThrow()
  })
})
