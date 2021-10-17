import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import Account from 'src/components/Account'
import Auth from 'src/components/Auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Welcome" />
      {!isAuthenticated ? <Auth /> : <Account />}
    </>
  )
}

export default HomePage
