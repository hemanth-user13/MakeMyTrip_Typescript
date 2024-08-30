import React from "react";

interface SerachButtonProps{
    buttonname?:string
}


const Searchbutton:React.FC<SerachButtonProps>=({buttonname})=>{
    return (
        <button
        type="submit"
        className="bg-blue-500 text-white font-serif py-2 px-4 rounded-full w-44 text-2xl "
      >
        {buttonname}
      </button> 
    )
}

export default Searchbutton
