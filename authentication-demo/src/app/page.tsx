import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  // On Server Component
  const authObj = await auth();
  const userObj = await currentUser();
  // console.log(authObj, userObj);

  return (
    <h1 className="text-xl font-bold">Authentication Demo</h1>
  );
}
