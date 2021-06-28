import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  console.log(session);

  function loginHandler() {
    console.log('login');
    signIn('facebook');
  }

  function logoutHandler() {
    console.log('logout')
    signOut()
  }

  return (
    <div className="container">
      {!session && (
        <>
          <h1>Hello there!</h1>
          <button onClick={loginHandler}>Login with FB</button>
        </>
      )}
      {session && (
        <>
          <h1>Hello {session.user.name}!</h1>
          <button onClick={logoutHandler}>Logout</button>
        </>
      )}
      
    </div>
  )
}
