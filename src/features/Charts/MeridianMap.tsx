import React from 'react';
import bgImage from "../../assets/bg_human.png";
import { MeridianUser } from '../../app/models/treeOfLife';
import { RiArrowTurnBackFill } from 'react-icons/ri';

const meridianPositions = [
    { id: 1, top: '19.8%', left: '50%', },   // Top of head
    { id: 2, top: '22.5%', left: '50%', },   // Forehead
    { id: 3, top: '24.5%', left: '50%', },    // Nose
    { id: 4, top: '30%', left: '50%', }, // throat
    { id: 5, top: '36%', left: '50%', }, // Center chest
    { id: 6, top: '43%', left: '50%', },   // center abdomen
    { id: 7, top: '47%', left: '50%', },   // lower abdomen
    { id: 8, top: '53%', left: '50%', },   // peepee
    { id: 9, top: '47%', left: '42%', },    //lower back
    { id: 10, top: '52%', left: '42%', },   // bum
    { id: 11, top: '89%', left: '45.4%', },  //right toe
    { id: 12, top: '90%', left: '50%', }, //idek what is this
];

const MeridianMap: React.FC<{ userMeridianData: MeridianUser[] }> = ({ userMeridianData }) => {
    return (
        <div className="relative w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            {/* <h1 className='text-3xl text-white absolute top-8 left-[40%] z-10 font-serif'>Meridian Map</h1> */}
            {meridianPositions.map((position, index) => (
                <div
                    key={index}
                    className={`absolute flex items-center`}
                    style={{
                        top: position.top,
                        left: position.left,
                        transform: 'translate(-50%, -50%)',
                    }}
                >

                    {userMeridianData[index]?.numbers.length > 0 ? (
                        userMeridianData[index].numbers.map((number, numIndex) => (
                            <div
                                key={numIndex}
                                className="text-[0.5rem] md:text-xs xl:text-[1rem] text-white flex justify-center items-center mb-1"
                            >
                                {(position.id === 9 || position.id === 10) && <RiArrowTurnBackFill className='text-white -rotate-90 absolute text-xl -top-1 -left-7' />}{number}
                                {numIndex < userMeridianData[index].numbers.length - 1 && ', '}
                            </div>
                        ))
                    ) : (
                        <div className="text-[0.5rem] md:text-xs xl:text-[1rem] bg-transparent text-white flex justify-center items-center">
                            X
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MeridianMap;
