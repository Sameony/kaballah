import React from 'react';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card onClick={() => navigate("/admin/users")} className="p-6 text-center bg-[#D2B48C] hover:bg-[#C19A6B] cursor-pointer transition-all ease-in-out text-white flex items-center justify-center ">
                    <h3 className="text-xl font-semibold">View Users</h3>

                </Card>
                <Card onClick={() => navigate("/admin/domains")} className="p-6 text-center bg-[#D2B48C] hover:bg-[#C19A6B] cursor-pointer transition-all ease-in-out text-white flex items-center justify-center ">
                    <h3 className="text-xl font-semibold">Allocate Domains</h3>

                </Card>
            </div>
        </div>
    );
};

export default Home;
