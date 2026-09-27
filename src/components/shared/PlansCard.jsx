
import { Clock, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ExerciseCard = ({ plan }) => {
    return (
        // Outer container with dark theme, rounded corners, and shadow
        <div className="bg-zinc-950 text-white rounded-3xl overflow-hidden shadow-lg w-full max-w-[350px]">
            {/* Image Section */}
            <figure className="relative w-full h-52">
                <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 350px"
                />
            </figure>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-3">
                
                {/* Muscle Groups Tags */}
                <div className="flex flex-wrap gap-2">
                    {plan.muscleGroups.map((group, index) => (
                        <span
                            key={index}
                            className="bg-[#d4ff00] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                {/* Title & Equipment */}
                <div>
                    <Link href={`/workout/${plan.id}`}>
                    <h2 className="text-xl font-extrabold uppercase tracking-wide">
                        {plan.name}
                    </h2>
                    </Link>
                    <p className="text-zinc-400 text-sm mt-1">
                        {plan.equipment}
                    </p>
                </div>

                {/* Stats Row (Duration, Calories, Rating) */}
                <div className="flex items-center gap-4 text-zinc-300 text-sm mt-2">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-zinc-400" />
                        <span>{plan.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Flame size={16} className="text-zinc-400" />
                        <span>{plan.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Star size={16} className="text-zinc-400" />
                        <span>{plan.rating}</span>
                    </div>
                </div>

                {/* Optional: If you want to keep the View Details button, you can add it here. 
                    However, the reference image doesn't show one. Instead, you could wrap 
                    the entire card in a <Link> to make it clickable. */}
            </div>
        </div>
    );
};

export default ExerciseCard;