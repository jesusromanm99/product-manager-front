// UserList.tsx
import React, { useEffect, useState } from "react";
import { User } from "../utils/interface";
import PageTitle from "./PageTitle";
import { approveUser, getUsers } from "../utils/service";
import { toast } from "react-toastify";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUser_ = async () => {
    const { data, error } = await getUsers();
    if (data) {
      setUsers(data);
    } else {
      toast.error(error);
    }
  };
  useEffect(() => {
    getUser_();
  }, []);
  const handleApprove = async (id: number) => {
    const data = await approveUser({ id });
    const users_ = users.map((user) => {
      return user.id == id ? data : user;
    });
    setUsers(users_);
  };

  return (
    <div>
      <PageTitle title='Lista de usuarios' />
      <table className='border-collapse w-full'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>User</th>
            <th className='border px-4 py-2'>Email</th>
            <th className='border px-4 py-2'>Staff</th>
            <th className='border px-4 py-2'>Admin</th>
            <th className=' px-4 py-2 border-0 '></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='border px-4 py-2'>{user.username}</td>
              <td className='border px-4 py-2'>{user.email}</td>
              <td className='border px-4 py-2'>{user.is_staff ? "Yes" : "No"}</td>
              <td className='border px-4 py-2'>{user.is_superuser ? "Yes" : "No"}</td>
              <td className='px-4 py-2 border-0'>
                {!user.is_staff && (
                  <button
                    onClick={() => handleApprove(user.id)}
                    className='bg-green-700 hover:bg-green-800 text-white px-2 py-1 rounded-md'
                  >
                    Approve
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
