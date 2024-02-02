//@ts-nocheck
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data } = useSession();

  if (!data) {
    // If data is null, the user is not signed in
    return <div>Not signed in <button onClick={() => signIn("google")}>Sign in</button></div>;
  }

  const { accessToken } = data;

  return <div>Access Token: {accessToken}</div>;
}
