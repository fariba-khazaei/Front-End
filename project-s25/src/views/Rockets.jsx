import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router";
import { apiUrl } from "../utils/index.js";

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  const fetchRockets = useCallback(async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setRockets(data);
    } catch (err) {
      console.log("Failed to fetch rockets ", err);
    }
  }, []);

  useEffect(() => {
    fetchRockets();
  }, [fetchRockets]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"> Space Rockets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rockets.map((rocket) => (
          <Link
            to={`/${rocket.id}`}
            key={rocket.id}
            className="p-4 border rounded-xl shadow hover:bg-gray-100"
          >
            <p className="text-sm line-clamp-3">
              Rocket {JSON.stringify(rocket.id)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
