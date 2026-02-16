import SignInButton from "@/components/signInButton";
import { signInAction } from "../../signin/action";
import { signInFacebookAction } from "../../signin/action";

export default function Signin() {
  return (
    <>
      <form action={signInAction}>
        <SignInButton />
      </form>
      <form action={signInFacebookAction}>
        <button
          type="submit"
          style={{
            color: "white",
            border: "2px solid white",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          Sign in with Facebook
        </button>
      </form>
    </>
  );
}
