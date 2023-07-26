import React from 'react';
import { UserData } from '../Interfaces/UserData';

export function UserTable({ filteredData }: { filteredData: UserData[] | null; }) {
  return <table className="UserTable">
    <thead>
      <tr>
        <th>ID</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>City</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((item) => (
          <tr key={item?.id}>
            <td>{item?.id}</td>
            <td>{item?.firstname}</td>
            <td>{item?.lastname}</td>
            <td>{item?.age}</td>
            <td>{item?.city}</td>
            <td>{item?.address}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}>No matching results</td>
        </tr>
      )}
    </tbody>
  </table>;
}
