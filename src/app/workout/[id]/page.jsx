import AddButton from '@/components/buttons/AddButton';
import SaveLaterButton from '@/components/buttons/SavelaterButton';
import Image from 'next/image';
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
const ExerciseDetailsCard = async({ params }) => {
    const { id } = await params;
    const plansData = await getPlans();
    const plan = plansData.find(( plan ) => String(plan.id) === String(id));
    const stats = [
    { label: 'Equipment', value: plan.equipment },
    { label: 'Difficulty', value: plan.difficulty },
    { label: 'Sets', value: plan.sets },
    { label: 'Reps', value: plan.reps },
    { label: 'Duration', value: `${plan.duration} min` },
    { label: 'Calories', value: `${plan.caloriesBurned} kcal` },
    { label: 'Rating', value: plan.rating },
  ];

  return (
    <div className="card lg:card-side bg-zinc-950 text-white shadow-2xl rounded-3xl overflow-hidden border border-zinc-800 max-w-7xl mx-auto">
      
      {/* Image Section */}
      <figure className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
        <Image
          src={plan.image}
          alt={plan.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </figure>

      {/* Content Section */}
      <div className="card-body p-6 md:p-10 lg:w-1/2 flex flex-col gap-6">
        
        {/* Header: Title, Description, Tags */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            {plan.name}
          </h2>
          <p className="text-zinc-400 mt-3 text-sm md:text-base leading-relaxed">
            {plan.description}
          </p>
          
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mt-4">
            {plan.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="bg-[#d4ff00] text-black text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Table */}
        <div className="w-full mt-2 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex justify-between px-5 py-3 text-sm ${
                index !== stats.length - 1 ? 'border-b border-zinc-800' : ''
              }`}
            >
              <span className="text-zinc-400 font-semibold uppercase tracking-wider text-xs">
                {stat.label}
              </span>
              <span className="text-white font-medium">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
            Instructions
          </h3>
          <ol className="list-decimal list-inside text-zinc-400 text-sm space-y-2">
            {plan.instructions.map((instruction, index) => (
              <li key={index} className="leading-relaxed pl-1">
                {instruction}
              </li>
            ))}
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="card-actions flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-zinc-800">
          <AddButton plan={plan}/>
          <SaveLaterButton plan = {plan}/>
        </div>

      </div>
    </div>
  );
};

export default ExerciseDetailsCard;