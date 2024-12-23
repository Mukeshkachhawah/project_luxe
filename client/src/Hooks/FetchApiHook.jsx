import { useState, useEffect } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null); // Set to null to differentiate between loading and empty data
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(url);
        console.log("urrrrrrrllllll<<<<<<<<<<<<<", response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // End loading once the request is complete (either success or failure)
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading }; // Return loading along with data and error
};

export default useFetch;
