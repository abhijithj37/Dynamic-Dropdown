import { useEffect,useState} from "react";
import axios from "../api/axios";



const useFetchData = () => {
  const [table, setTable] = useState("/api/country");
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
    setIsLoading(true);
    setErr("");
    try {
      const response = await axios.get(table);
      setData(response.data);
    } catch (error) {
      setErr(`Some thing went wrong please try again later!`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    
    fetchData();
  }, [table]);

  return {setTable, isLoading, err, data ,fetchData};
};

export default useFetchData;
