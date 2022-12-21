import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://ornato-mart-server.vercel.app/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://ornato-mart-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("You are now Admin");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="mt-3">
      <h1 className="text-xl lg:text-2xl font-semibold text-gray-700 text-center my-4">
        Users
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr
                      key={user?._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user?.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user?.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                        {user?.role === "admin" ? (
                          <button className="border text-white border-purple-500 bg-purple-500 hover:bg-purple-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                            Remove Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user?._id)}
                            className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 px-4 py-1 text-xs lg:text-xl lg:w-40 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100"
                          >
                            Make Admin
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
