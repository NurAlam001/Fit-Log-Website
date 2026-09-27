'use client'
import React, { createContext, useState } from 'react';


export const PlansContext = createContext({
    addPlan: [],
    setaddPlan: () => {},
    saveLater: [],
    setsaveLater: () => {},
});

const PlansProvider = ({children}) => {
    const [addPlan, setaddPlan] = useState([]);
    const [saveLater, setsaveLater] = useState([]);
    const sharedData = {
        addPlan,
        setaddPlan,
        saveLater,
        setsaveLater
    }
    return <PlansContext.Provider value={sharedData}>{children}</PlansContext.Provider>
};

export default PlansProvider;