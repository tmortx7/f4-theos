import Link from 'next/link';
import React from "react";
import { useSessionStorage } from "usehooks-ts";

type Props = {
  children: React.ReactNode;
};

const DrawerLayout = ({ children }: Props) => {
  //initialize state here. we use a key and a default state
  const [open, setOpen] = useSessionStorage("drawer", false);
  return (
    <div className="drawer">
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
        <ul className="menu p-2 overflow-y-auto w-[150px] bg-base-100">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <a>Sidebar</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerLayout;