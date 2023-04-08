import { useSessionStorage } from "usehooks-ts";
import { TfiLayoutMenuV } from 'react-icons/tfi';

export const BottomNav = () => {
  const [, setOpen] = useSessionStorage("drawer", false);
  const toggleDrawer = () => setOpen((prev) => !prev);
  return (
    <div className="btm-nav bg-slate-200">
      <button onClick={toggleDrawer}>
        <TfiLayoutMenuV size={30}/>
      </button>

    </div>
  );
};
