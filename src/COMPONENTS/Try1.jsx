import React, { useState } from "react";

const Try1 = () => {
  const [data, setdata] = useState({});
  const [fetching, setfetching] = useState(false);
  const handledata = async () => {
    try {
      setfetching(true);
      const resp = await fetch(
        // `https://backend-spring-e04h.onrender.com/api/v1/userrs`
        // `http://localhost:8083/api/v1/userrs`
        `http://3.82.136.89:8080/api/v1/userrs`
      );
      if (!resp.ok) {
        console.log("error in fetching data");
      }
      setfetching(false);
      const data = await resp.json();
      console.log(data);
      setdata(data);
    } catch (err) {
      setfetching(false);
      console.log("error in fetching or connected to backend " + err);
    } finally {
      setfetching(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-lg md:text-xl font-semibold mb-4 text-center">
        hey this is app for trial
      </p>

      <button
        onClick={() => handledata()}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4 w-full md:w-auto"
      >
        GET DATA
      </button>

      {fetching && (
        <div className="bg-yellow-200 px-4 py-2 rounded w-full md:w-auto text-center">
          <h1 className="text-lg font-bold">DATA FETCHING IS GOING ON</h1>
        </div>
      )}

      {data.length > 0 &&
        data.map((data, ind) => (
          <div
            className="mt-4 bg-white shadow rounded p-4 w-full md:w-1/2"
            key={ind}
          >
            <p>
              <strong>ID:</strong> {data.id}
            </p>
            <p>
              <strong>Username:</strong> {data.username}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Auth:</strong> {data.auth}
            </p>
            <p>
              <strong>Date:</strong> {data.date}
            </p>
            <p>
              <strong>Password:</strong> {data.password}
            </p>
            <p>
              <strong>Project:</strong> {data.project}
            </p>
            <p>
              <strong>Times:</strong> {data.times}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Try1;
