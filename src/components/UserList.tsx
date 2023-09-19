// UserList.tsx
import React, { useEffect, useState } from "react";
import { RUser } from "../utils/interface";
import PageTitle from "./PageTitle";
import { approveUser, getUsers } from "../utils/service";
import { toast } from "react-toastify";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from "react-router-dom";

const UserList: React.FC = () => {
  const [results, setResults] = useState<RUser>({} as RUser);
  const [hasError, setHasError] = useState(false);
  const [searchParams] = useSearchParams(); // Get the current page from URL params
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || 1));

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= results.count) {
      setCurrentPage(newPage);
      getUser_(newPage);
      navigate(`/users?page=${newPage}`);
    }
  };

  const getUser_ = async (page: number) => {
    const { data, error } = await getUsers({ page });

    if (data) {
      setResults(data);
    } else {
      toast.error(error);
      setHasError(true);
    }
  };
  useEffect(() => {
    getUser_(currentPage);
  }, []);

  const handleApprove = async (id: number) => {
    const { data, error } = await approveUser({ id });
    if (data) {
      const users_ = results.results.map((user) => {
        return user.id == id ? data : user;
      });
      toast.success("User approved successfully.");
      setResults({ ...results, results: users_ });
    } else {
      toast.error(error);
    }
  };

  if (hasError) {
    return <></>;
  }
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row justify-between flex-wrap  mb-4'>
        <PageTitle title='Users list' />
        <Pagination
          handlePageChange={handlePageChange}
          totalPages={results.count}
          page={currentPage}
          hasNextPage={!!results.next}
          hasPrevPage={!!results.previous}
        />
      </div>
      <div className='overflow-x-auto'>
        <table className='border-collapse w-full overflow-x-auto'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>User</th>
              <th className='border px-4 py-2'>Email</th>
              <th className='border px-4 py-2'>Staff</th>
              <th className='border px-4 py-2'>Admin</th>
            </tr>
          </thead>
          <tbody>
            {results?.results?.map((user, index) => (
              <tr key={index}>
                <td className='border px-4 py-2 text-center'>{user.username}</td>
                <td className='border px-4 py-2 text-center'>{user.email}</td>
                <td className='border px-4 py-2 text-center'>{user.is_staff ? "Yes" : "No"}</td>
                <td className='border px-4 py-2 text-center'>{user.is_superuser ? "Yes" : "No"}</td>

                {!user.is_staff && (
                  <button
                    onClick={() => handleApprove(user.id)}
                    className='bg-green-700 hover:bg-green-800 text-white px-2 py-1 rounded-md ml-5'
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
