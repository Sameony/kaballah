import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const AllocateDomains: React.FC = () => {
    const navigate = useNavigate();
    const [domains, setDomains] = useState<string[]>([]);
    const [newDomain, setNewDomain] = useState('');

    const addDomain = () => {
        if (newDomain.trim() !== '') {
            setDomains([...domains, newDomain.trim()]);
            setNewDomain('');
        }
    };

    const deleteDomain = (index: number) => {
        setDomains(domains.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full h-full min-h-screen bg-black text-white p-4 flex flex-col justify-center items-center font-custom">
            <div className="w-full max-w-md bg-white text-black p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-8">
                    <Button className="bg-[#D2B48C] hover:bg-[#C19A6B] px-3" onClick={() => navigate(-1)}>Back</Button>
                    <h2 className="text-2xl font-semibold text-center">Allocate Domains</h2>
                    <p></p>
                </div>
                <div className="mb-4">
                    <TextInput
                        id="newDomain"
                        type="text"
                        placeholder="Enter a domain"
                        value={newDomain}
                        onChange={(e) => setNewDomain(e.target.value)}
                        className="w-full mb-2"
                    />
                    <Button onClick={addDomain} className="w-full bg-[#D2B48C] hover:bg-[#C19A6B] text-white">
                        Add Domain
                    </Button>
                </div>
                <ul className="list-disc list-inside">
                    {domains.map((domain, index) => (
                        <li key={index} className="flex justify-between items-center">
                            {domain}
                            <Button
                                size="xs"
                                color="danger"
                                onClick={() => deleteDomain(index)}
                                className="ml-4"
                            >
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AllocateDomains;
