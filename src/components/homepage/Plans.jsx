import React from 'react';
import ExerciseCard from '../shared/PlansCard';

const getPlans = async () => {
  try{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = res.json();
    return data;
  }catch(error){
    console.error(error)
    return []
  }
}

const Plans = async() => {
    const plansData = await getPlans();


    return (
        <div className='container mx-auto my-[70px]'>
            <h1 className='flex justify-start text-2xl text-center mb-4 font-bold'>THE LIBRARY</h1>
            <p className='text-xl font-semibold'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 gap-3 mt-6'>
            {
                plansData.map((plan,index) => {
                return <ExerciseCard key={index} plan = {plan}/>
            })}
            </div>
        </div>
    );
};

export default Plans;