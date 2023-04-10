import React from "react";
import { useAuth, SignedIn, SignedOut } from "@clerk/nextjs";
import router from "next/router";
import { useSessionStorage } from "usehooks-ts";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import COC from "../../public/coc-logo-simplify.svg";

type Props = {
  children: React.ReactNode;
};

const DrawerLayout = ({ children }: Props) => {


  //initialize state here. we use a key and a default state
  const [open, setOpen] = useSessionStorage("drawer", false);
  const { signOut } = useAuth();
  return (
    <div className="drawer drawer-end">
      <input
        id="app-drawer"
        type="checkbox"
        className="drawer-toggle"
        // checked property will now reflect our open state
        checked={open}
        readOnly
      />
      <div className="drawer-content flex flex-col ">{children}</div>
      <div className="drawer-side">
        <label
          className="drawer-overlay"
          // add a onClick handler here to close the drawer
          onClick={() => setOpen(false)}
        ></label>
        <div className="w-[110px] overflow-y-auto bg-[#374151]">
          <div className="flex flex-col items-center">
            <COC className="mt-4 h-[40px]" />
            <div className="divider"></div>
            <div className="fixed bottom-0 mb-[20px] w-full">
              <div className="flex flex-row justify-center">
                 <SignedOut>
                  <button onClick={() => void router.push("/signin")}>
                    <VscSignIn size={30} />
                  </button>
                </SignedOut>
                <SignedIn>
                  <button
                    onClick={() => {
                      setOpen(false);
                      void signOut();

                    }}
                  >
                    <VscSignOut size={30} />
                  </button>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerLayout;
