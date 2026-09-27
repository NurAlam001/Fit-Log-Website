'use client'
import ExerciseCard from '@/components/shared/PlansCard';
import { PlansContext } from '@/context/planContext';
import React, { useContext, useState } from 'react';

const Myplan = () => {
    const { addPlan, saveLater } = useContext(PlansContext);
    
    // 1. State to track the current sort option (default is 'duration')
    const [sortBy, setSortBy] = useState('duration');

    // 2. Helper function to sort the array based on the selected option
    const sortPlans = (plansArray) => {
        // Create a copy of the array so we don't mutate the original Context state
        const sortedArray = [...plansArray];

        if (sortBy === 'duration') {
            // Shortest duration first
            return sortedArray.sort((a, b) => a.duration - b.duration);
        } 
        else if (sortBy === 'calories') {
            // Highest calories burned first
            return sortedArray.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } 
        else if (sortBy === 'rating') {
            // Highest rating first
            return sortedArray.sort((a, b) => b.rating - a.rating);
        }
        
        return sortedArray;
    };

    return (
        <div className='container mx-auto py-6'>
            <h1 className='my-1 text-4xl text-start font-bold text-green-500'>MY PLAN </h1>
            <p className='font-semibold '>Cap of five lifts for today. Finish them, then load more.</p>
            
            {/* Sort By Dropdown Section */}
            <div className="flex justify-end items-center my-6 gap-3">
                <span className="text-sm font-semibold text-gray-600">Sort By:</span>
                {/* DaisyUI select component automatically provides the chevron icon */}
                <select 
                    className="select select-bordered select-sm w-full max-w-[150px] bg-base-100 font-medium"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className='my-6'>
                <div className="tabs tabs-lift">
                    
                    {/* TODAY'S PLAN TAB */}
                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Today's Plan (${addPlan.length})`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            addPlan.length > 0 ? (
                                // 3. Apply the sortPlans function before mapping
                                sortPlans(addPlan).map((plan) => {
                                    return <ExerciseCard key={plan.id} plan={plan} />
                                })
                            ) : (
                                <p className='text-center text-2xl font-bold py-10'>No Plans Found</p>
                            )
                        }
                    </div>

                    {/* SAVED TAB */}
                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Saved(${saveLater.length})`} />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            saveLater.length > 0 ? (
                                // 3. Apply the sortPlans function before mapping
                                sortPlans(saveLater).map((plan) => {
                                    return <ExerciseCard key={plan.id} plan={plan} />
                                })
                            ) : (
                                <p className='text-center text-2xl font-bold py-10'>Nothing Saved For Later</p>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Myplan;