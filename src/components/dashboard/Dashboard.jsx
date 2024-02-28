import React from 'react';

const Dashboard = () => {
  
  const itineraryData = [
    { id: 1, destination: 'Paris', date: '2024-03-01', duration: '5 days' },
    { id: 2, destination: 'Tokyo', date: '2024-04-15', duration: '7 days' },
    { id: 3, destination: 'New York', date: '2024-06-20', duration: '4 days' },
    { id: 4, destination: 'London', date: '2024-08-10', duration: '3 days' },
    { id: 5, destination: 'Rome', date: '2024-09-28', duration: '6 days' }
  ];

  
  const handleLogout = () => {
    
    console.log('Logout clicked');
  };

  return (
    <div className="dashboard h-screen">
      <header className=" text-yellow-400 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">Travel Itinerary Dashboard</div>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
          Logout
        </button>
      </header>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Your Travel Itineraries</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.no</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-200">
            {itineraryData.map((item, index) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.destination}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
