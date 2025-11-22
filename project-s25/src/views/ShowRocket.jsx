import { useParams } from "react-router";
import { useEffect, useState, useCallback, useMemo } from "react";

import { apiUrl } from "../utils/index.js";

const ShowRocket = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState([]);

  const fetchRocket = useCallback(async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setRocket(data);
    } catch (err) {
      console.log("Failed to fetch rockets ", err);
    }
  }, []);

  useEffect(() => {
    fetchRocket();
  }, [fetchRocket]);

  const memoRocket = useMemo(() => {
    console.log(rocket);
    return rocket.find((item) => item.id == id);
  }, [rocket, id]);

  return <div className="p-6">{JSON.stringify(memoRocket)}</div>;
};

export default ShowRocket;
