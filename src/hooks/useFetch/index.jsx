import { useState, useEffect, useContext } from "react"
import { SearchContext } from "../../context" 

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(SearchContext); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result.results || result);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm || endpoint.includes("search=")) {
      fetchData();
    }
  }, [endpoint, searchTerm]);

  return { data, loading, error };
}
