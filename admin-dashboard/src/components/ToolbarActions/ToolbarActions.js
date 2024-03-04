import React from "react";
import { LuMessagesSquare, LuBell, LuSearch, LuSettings } from "react-icons/lu";



const ToolbarActions = ({handleSettings}) => {
  return (
    <div className="flex">
      <div>
        <button className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200  rounded-full ml-3 false">
          <LuSearch />
        </button>
      </div>
      <div>
        <button className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200  rounded-full ml-3 false">
          <LuBell />
        </button>
      </div>
      <div>
        <button className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200  rounded-full ml-3 false">
          <LuSettings onClick={handleSettings} />
        </button>
      </div>

      <div>
        <button className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200  rounded-full ml-3 false">
          <LuMessagesSquare />
        </button>
      </div>
    </div>
  );
};

export default ToolbarActions;
