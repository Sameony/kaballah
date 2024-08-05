import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

const ChartForm: React.FC = () => {
    const openPDF = () => {
        window.open('/thepd.pdf', '_blank');
    };

    return (
        <div className="w-full h-full min-h-screen bg-black text-white p-4 flex flex-col justify-center items-center font-custom">
            <div className="w-full max-w-md bg-white text-black p-6 rounded-lg shadow-md">
                <form onSubmit={openPDF} className="space-y-4">
                    <div>
                        <TextInput id="firstName" type="text" placeholder="First Name" required className="w-full" />
                    </div>
                    <div>
                        <TextInput id="lastName" type="text" placeholder="Last Name" required className="w-full" />
                    </div>
                    <div>
                        <TextInput id="email" type="email" placeholder="Email Id" required className="w-full" />
                    </div>
                    <div>
                        <Label htmlFor="dob" className="block mb-2">D.O.B:</Label>
                        <div className="flex space-x-2">
                            <TextInput id="mm" type="text" placeholder="MM" className="w-1/3" required />
                            <TextInput id="dd" type="text" placeholder="DD" className="w-1/3" required />
                            <TextInput id="yy" type="text" placeholder="YY" className="w-1/3" required />
                        </div>
                    </div>
                    <div>
                        <TextInput id="placeOfBirth" type="text" placeholder="Place Of Birth" required className="w-full" />
                    </div>
                    <div>
                        <Label htmlFor="timeOfBirth" className="block mb-2">Time Of Birth</Label>
                        <div className="flex space-x-2">
                            <TextInput id="hh" type="text" placeholder="00" className="w-1/3" required />
                            <TextInput id="mm" type="text" placeholder="00" className="w-1/3" required />
                            <select id="ampm" className="w-1/3 rounded-lg border-gray-300 bg-white">
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>
                    <Button size={'lg'} type="submit" className="mt-5 py-2 px-3 w-full text-lg font-bold bg-[#C19A6B] hover:bg-[#7e6444] text-white font-customBold">
                        Generate My Chart
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default ChartForm;