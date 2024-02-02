// pages/index.tsx
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

function Home() {
  const { data: session } = useSession();

  const handleSignIn = async () => {
    await signIn('google'); // 'google' is the name of the Google provider configured in your [nextauth].ts
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (!session) {
    return (
      <div>
        <p>You are not authenticated. Please sign in.</p>
        <button onClick={handleSignIn}>Sign In with Google</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Hello, {session.user?.name}!</h1>
      <h1>
        <Image src={session.user?.image!} width={50} height={50} alt='img'/>
      </h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
