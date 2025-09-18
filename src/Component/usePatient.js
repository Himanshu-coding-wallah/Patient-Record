import { useEffect, useState } from "react";

function usePatient() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("API not working");
        return res.json();
      })
      .then((json) => setData(json))
      .catch(() => setError("Something went wrong. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}

export default usePatient;
