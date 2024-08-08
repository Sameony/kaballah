import { useState } from "react";
import TreeOfLife from "./Charts/TreeOfLife";
import MeridianMap from "./Charts/MeridianMap";


const App = () => {
    const [isTree, setIsTree] = useState<boolean>(false)
    const userCircles = [
        { mainIndex: 0, innerIndex: 3 },
        { mainIndex: 2, innerIndex: 7 },
        { mainIndex: 6, innerIndex: 11 },
        { mainIndex: 4, innerIndex: 8 },
        { mainIndex: 1, innerIndex: 8 },
        { mainIndex: 3, innerIndex: 8 },
        // Add more if needed
    ];
    const userMeridianData = [
        { id: 1, numbers: [1] },   // Top of head
        { id: 2, numbers: [2] },   // Upper chest
        { id: 3, numbers: [3] },    // Lower chest
        { id: 4, numbers: [4] }, // Left side
        { id: 5, numbers: [5] }, // Center abdomen
        { id: 6, numbers: [6] },   // Lower abdomen
        { id: 7, numbers: [7] },   // Feet
        { id: 8, numbers: [8] },     // Another position
        { id: 9, numbers: [9, 10, 10, 12] },
        { id: 10, numbers: [10] },
        { id: 11, numbers: [11] },
        // Add more data as needed
    ];

    return (
        <div className=" aspect-square w-full relative">
            {isTree ? <TreeOfLife circles={userCircles} /> : <MeridianMap userMeridianData={userMeridianData} />}

            <div className="flex justify-between items-center right-[14%] left-0 absolute z-10 top-[2.5%]">
                <p></p>
                <h1 className="text-white text-sm md:text-2xl font-serif">{isTree ? "Tree Of Life" : "Meridian Map"}</h1>
                <label className="inline-flex items-center cursor-pointer text-white">
                    <input type="checkbox" onChange={() => setIsTree(!isTree)} value={Number(isTree)} className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400 dark:peer-focus:ring-yellow-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
                </label>
            </div>

        </div>
    );
};

export default App;
