import { useEffect } from "react";
import { useState } from "react";

export const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://ornato-mart-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, adminLoading];
};
