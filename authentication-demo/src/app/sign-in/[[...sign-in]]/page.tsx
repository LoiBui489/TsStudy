import { SignIn } from "@clerk/nextjs";

// Custom sign in page. Still stay in my domain, not clerk
export default function SignInpage() {
    return (
      <div className="flex justify-center items-center py-8">
        <SignIn />
      </div>  
    );
};
