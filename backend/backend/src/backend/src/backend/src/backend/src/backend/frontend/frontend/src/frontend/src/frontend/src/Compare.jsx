import { useState } from "react";
import { getRoutes, compareRoutes } from "./api";

export default function Compare() {
  const [routes, setRoutes] = useState([]);
  const [result, setResult] = useState(null);

  const load = async () => {
    const res = await getRoutes();
    setRoutes(res.data);
  };

  const compute = async () => {
    const res = await compareRoutes(routes);
    setResult(res.data);
  };

  return (
    <div>
      <button onClick={load}>Load Routes</button>
      <button onClick={compute}>Compare</button>

      {result && (
        <div>
          <h3>Best Route: {result.bestRoute}</h3>
        </div>
      )}
    </div>
  );
}
