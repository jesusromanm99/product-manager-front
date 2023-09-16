// UserList.tsx
import React, { useState } from "react";
import { User } from "../utils/interface";
import PageTitle from "./PageTitle";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      username: "user1",
      password: "password1",
      email: "user1@example.com",
      isStaff: false,
      isSuperUser: false,
    },
    {
      username: "user2",
      password: "password2",
      email: "user2@example.com",
      isStaff: true,
      isSuperUser: false,
    },
    {
      username: "user3",
      password: "password3",
      email: "user3@example.com",
      isStaff: false,
      isSuperUser: false,
    },
    // Add more user data here...
  ]);

  const handleApprove = (index: number) => {
    const updatedUsers = [...users];
    updatedUsers[index].isStaff = true;
    setUsers(updatedUsers);
  };

  return (
    <div>
      <PageTitle title='Lista de usuarios' />
      <table className='border-collapse w-full'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Usuario</th>
            <th className='border px-4 py-2'>Correo</th>
            <th className='border px-4 py-2'>Staff</th>
            <th className='border px-4 py-2'>Admin</th>
            <th className='border px-4 py-2'>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='border px-4 py-2'>{user.username}</td>
              <td className='border px-4 py-2'>{user.email}</td>
              <td className='border px-4 py-2'>{user.isStaff ? "Yes" : "No"}</td>
              <td className='border px-4 py-2'>{user.isSuperUser ? "Yes" : "No"}</td>
              <td className='border px-4 py-2'>
                {!user.isStaff && (
                  <button
                    onClick={() => handleApprove(index)}
                    className='bg-green-700 hover:bg-green-800 text-white px-2 py-1 rounded-md'
                  >
                    Aprobar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
