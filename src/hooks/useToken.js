import { useState } from "react";
import { useEffect } from "react";

export const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://ornato-mart-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("ornatoToken", data.ornatoToken);
          setToken(data.ornatoToken);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return [token];
};
