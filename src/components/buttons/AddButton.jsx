"use client"

import { PlansContext } from "@/context/planContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddButton = ({plan}) => {
    const {addPlan, setaddPlan} = useContext(PlansContext);
    
    const handleaddPlan = () =>{
        // console.log('button triggerd')
    const existingPlan = addPlan.find((item) => item.id === plan.id);

    if (existingPlan) {
        toast.warn(`"${plan.name}" is already in today's plan!`);
        return; 
    }

        setaddPlan([...addPlan, plan])
        toast.success(`You have added "${plan.name}"`)

    }
    
    return (
        <button className="btn flex-1 bg-[#d4ff00] hover:bg-[#c2eb00] text-black border-none font-bold rounded-xl" onClick={() => handleaddPlan()}>
            Add to today's plan
          </button>
    );
};

export default AddButton;