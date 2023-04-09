import COC from "../../public/coc-logo.svg";
import router from "next/router";
import { useAuth, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export const Header = () => {
  const { signOut } = useAuth();
  const {user} = useUser();

  return (
    <div className="flex flex-row bg-slate-700  items-center">
      <div className="flex basis-3/4 flex-row gap-4">
        <COC className="h-[30px] p-1" />
      </div>
      <div className="flex basis-1/4 flex-row justify-end">
        <SignedOut>
          <button
            onClick={() => void router.push("/signin")}
            className="btn btn-success text-slate-100 btn-sm  mr-2 p-2"
          >
            sign-in
          </button>
        </SignedOut>
        <SignedIn>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="">
              <div className="">
                <button className="text-slate-50 mr-4 ">{user?.lastName}</button>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box mt-4 w-52 bg-white text-black shadow"
            >
              <li className="hover:bg-gray-50 hover:text-black ">
                <button onClick={() => void router.push("/user")}>
                  Profile
                </button>
              </li>
              <li className="hover:bg-gray-50 hover:text-black">
                <button
                  onClick={() => {
                    void signOut()
                    void router.push("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};
