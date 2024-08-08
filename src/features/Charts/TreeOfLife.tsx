import React from 'react';
import { TreeOfLifeProps } from '../../app/models/treeOfLife';
import bgImage from "../../assets/bg_human.png"

const outerCirclesPosition = [
    { top: '14.5%', left: '50%' }, // Keter
    { top: '23%', left: '37%' },   // Binah
    { top: '23%', left: '63%' },   // Hochmah
    { top: '40%', left: '37%' },   // Gevurah
    { top: '40%', left: '63%' },   // Chesed
    { top: '30.5%', left: '50%' }, // Daat
    { top: '60%', left: '37%' },   // Hod
    { top: '60%', left: '63%' },   // Netzach
    { top: '45%', left: '50%' },   // Tifereth
    { top: '62%', left: '50%' },   // Yesod
    { top: '85%', left: '50%' },   // Malkhut
];

const TreeOfLife: React.FC<TreeOfLifeProps> = ({ circles }) => {
    return (
        <div className='h-full w-full relative bg-contain bg-no-repeat bg-center' style={{
            backgroundImage: `url(${bgImage})`,
        }}>
            
            <div className="relative w-full h-full">

                {outerCirclesPosition.map((position, mainIndex) => (
                    <div
                        key={mainIndex}
                        className={`absolute w-[8%] h-[8%] rounded-full border-[#ffbf00] ${mainIndex === 5 ? "custom-dashed-border" : "border"}`}
                        style={{
                            top: position.top,
                            left: position.left,
                            transform: `translate(-50%, -50%)`,
                        }}
                    >
                        <div className="relative w-full h-full flex flex-wrap justify-center items-center">
                            {[...Array(11)].map((_, innerIndex) => {
                                const activeCircle = circles.find(
                                    (c) => c.mainIndex === mainIndex && c.innerIndex === innerIndex
                                );
                                const positionStyle = innerIndex < 3 ?
                                    { top: `${29 + innerIndex * 20}%`, left: `28%` } :
                                    innerIndex < 8 ?
                                        { top: `${10 + (innerIndex - 3) * 20}%`, left: `50%` } :
                                        { top: `${29 + ((innerIndex - 8) * 20)}%`, left: `72%` };

                                return (
                                    <div
                                        key={`${mainIndex}-${innerIndex}`}
                                        className={`absolute w-[14%] h-[14%] rounded-full border border-gray-50 border-opacity-40 ${activeCircle ? 'bg-yellow-500' : ''}`}
                                        style={{
                                            transform: `translate(-50%, -50%)`,
                                            ...positionStyle
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TreeOfLife;
