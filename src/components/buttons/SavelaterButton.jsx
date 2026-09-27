"use client"

import { PlansContext } from "@/context/planContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveLaterButton = ({plan}) => {
    const {saveLater, setsaveLater} = useContext(PlansContext);
    
    const handlesaveLater = () =>{
        // console.log('button triggerd')
    const existingsavePlan = saveLater.find((item) => item.id === plan.id);

    if (existingsavePlan) {
        toast.warn(`"${plan.name}" is already saved for later!`);
        return; 
    }
        setsaveLater([...saveLater, plan])
        toast.success(`You have saved "${plan.name}" for later`)

    }
    
    return (
        <button className="btn flex-1 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-600 font-bold rounded-xl" onClick={() => handlesaveLater()}>
            Save for later
          </button>
    );
};

export default SaveLaterButton;