import { LayoutBlank } from "./LayoutBlank";
import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col justify-center ">
      <div className="flex flex-row justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
          }
        }}
      />
      </div>
    </div>
  );
};

SigninPage.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutBlank>{page}</LayoutBlank>;
};

export default SigninPage;
