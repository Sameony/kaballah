import React from 'react';
import { Button, Table } from 'flowbite-react';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  placeOfBirth: string;
  timeOfBirth: string;
}

const UserDataTable: React.FC = () => {
  // Mock data - replace this with actual data fetching logic
  const userData: UserData[] = [
    {
      "firstName": "Amanda",
      "lastName": "Lester",
      "email": "amanda.lester@example.com",
      "dob": "1959-03-16",
      "placeOfBirth": "New Yolanda",
      "timeOfBirth": "10:30 PM"
    },
    {
      "firstName": "Walter",
      "lastName": "Gray",
      "email": "walter.gray@example.com",
      "dob": "1970-10-28",
      "placeOfBirth": "South Jeremy",
      "timeOfBirth": "12:13 AM"
    },
    {
      "firstName": "Thomas",
      "lastName": "Cooper",
      "email": "thomas.cooper@example.com",
      "dob": "1996-10-17",
      "placeOfBirth": "Scottchester",
      "timeOfBirth": "04:53 PM"
    },
    {
      "firstName": "Mark",
      "lastName": "Murphy",
      "email": "mark.murphy@example.com",
      "dob": "1990-07-11",
      "placeOfBirth": "Port Brian",
      "timeOfBirth": "07:16 AM"
    },
    {
      "firstName": "Tiffany",
      "lastName": "Nguyen",
      "email": "tiffany.nguyen@example.com",
      "dob": "2001-02-19",
      "placeOfBirth": "Monicaside",
      "timeOfBirth": "01:00 AM"
    },
    {
      "firstName": "Colleen",
      "lastName": "Landry",
      "email": "colleen.landry@example.com",
      "dob": "1997-03-15",
      "placeOfBirth": "Michaelport",
      "timeOfBirth": "04:14 PM"
    },
    {
      "firstName": "Alexander",
      "lastName": "Salinas",
      "email": "alexander.salinas@example.com",
      "dob": "1999-04-19",
      "placeOfBirth": "Matthewview",
      "timeOfBirth": "11:13 PM"
    },
    {
      "firstName": "Lori",
      "lastName": "Johnson",
      "email": "lori.johnson@example.com",
      "dob": "1985-01-16",
      "placeOfBirth": "East Jerryburgh",
      "timeOfBirth": "04:50 PM"
    },
    {
      "firstName": "Leah",
      "lastName": "Mercado",
      "email": "leah.mercado@example.com",
      "dob": "1977-12-13",
      "placeOfBirth": "East Sarah",
      "timeOfBirth": "05:29 AM"
    },
    {
      "firstName": "Karen",
      "lastName": "Cox",
      "email": "karen.cox@example.com",
      "dob": "1977-07-03",
      "placeOfBirth": "West Amyland",
      "timeOfBirth": "10:17 PM"
    },
    {
      "firstName": "Edward",
      "lastName": "Martin",
      "email": "edward.martin@example.com",
      "dob": "1994-07-16",
      "placeOfBirth": "Stanleyfort",
      "timeOfBirth": "09:09 PM"
    },
    {
      "firstName": "Taylor",
      "lastName": "Mccarthy",
      "email": "taylor.mccarthy@example.com",
      "dob": "2005-03-10",
      "placeOfBirth": "Robertchester",
      "timeOfBirth": "06:29 AM"
    }
  ]


  const openPDF = (email: string) => {
    // Placeholder logic to open a PDF for a specific user
    window.open(`/pdf/${email}.pdf`, '_blank');
  };

  return (
    <div className="w-full h-full min-h-screen bg-black text-white p-4 flex flex-col justify-center items-center font-custom">
      <div className="w-full max-w-6xl bg-white text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">User Data</h2>
        <Table striped>
          <Table.Head className='font-serif font-bold text-left'>
            <Table.HeadCell>First Name</Table.HeadCell>
            <Table.HeadCell>Last Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>DOB</Table.HeadCell>
            <Table.HeadCell>Place Of Birth</Table.HeadCell>
            <Table.HeadCell>Time Of Birth</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {userData.map((user, index) => (
              <Table.Row key={index} className="py-3 bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.firstName}
                </Table.Cell>
                <Table.Cell className='py-3'>{user.lastName}</Table.Cell>
                <Table.Cell className='py-3'>{user.email}</Table.Cell>
                <Table.Cell className='py-3'>{user.dob}</Table.Cell>
                <Table.Cell className='py-3'>{user.placeOfBirth}</Table.Cell>
                <Table.Cell className='py-3'>{user.timeOfBirth}</Table.Cell>
                <Table.Cell className='py-3'>
                  <Button
                    onClick={() => openPDF(user.email)}
                    className="py-1 px-2 bg-[#D2B48C] hover:bg-[#C19A6B] text-white"
                  >
                    View Chart PDF
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserDataTable;
