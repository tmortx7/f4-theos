import COC from "../../public/coc-logo.svg";

export const Header = () => {


  return (
    <div className="flex flex-row bg-slate-700  items-center">
      <div className="flex basis-3/4 flex-row gap-4">
        <COC className="h-[50px] p-2" />
      </div>
      <div className="flex basis-1/4 flex-row justify-end">

      </div>
    </div>
  );
};
