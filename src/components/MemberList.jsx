import React from 'react';
import { TABLE_HEAD, TABLE_ROWS } from './MemberlistDetails';

const MembersList = () => {
    return (
        <div className="container mx-auto py-4 md:p-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mb-8 text-center relative">
                Members List
                <span className="block h-1 w-28 md:w-44 bg-yellow-500 mt-2 mx-auto rounded"></span>
            </h2>

            {/* Table */}
            <div className="overflow-x-auto rounded-md md:rounded-lg shadow-lg">
                <table className="min-w-full bg-gray-900 text-white rounded-lg border-collapse">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="p-2 md:p-4 border-b border-gray-700 bg-gray-800 text-white text-left text-xs md:text-sm font-bold">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, department, year, shift, clubId }, index) => (
                            <tr key={name} className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                                <td className="p-2 md:p-4 border-t border-gray-700 text-xs md:text-sm">{name}</td>
                                <td className="p-2 md:p-4 border-t border-gray-700 text-xs md:text-sm">{`${department} - ${year}`}</td>
                                <td className="p-2 md:p-4 border-t border-gray-700 text-xs md:text-sm">{shift}</td>
                                <td className="p-2 md:p-4 border-t border-gray-700 text-xs md:text-sm font-mono">{clubId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MembersList;
