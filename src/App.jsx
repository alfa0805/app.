import React, { useEffect, useState } from 'react';
import bmw from "./assets/bmw.jpg"

function App() {
  const [loading,setloading] = useState(false);
  const [photos, setphotos] = useState([]);
  const gitphotos = () => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => {
        setphotos(res.slice(0,40));
      }).catch((err) => {
        console.log("Error=>", err);
      }).finally(() => {
        setloading(false);
      })
  };
    useEffect(() => {
      gitphotos();
    },[]);

    return (
      <div className="max-w-[1340px] bg-[#1e2939] h-full mx-auto px-[20px]">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="w-18 border text-blue-500 border-gray-300 px-4 py-2">Number</th>
              <th className="w-100 border text-blue-500 border-gray-300 px-4 py-2">Rasmi</th>
              <th className="w-100 border text-blue-500 border-gray-300 px-4 py-2">Nomi</th>
              <th className="w-25 border text-blue-500 border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="z-20">
           { loading ? <td className="w-full py-[200px] text-5xl text-center text-blue-600 font-medium">
            Loading...
          </td>:<>
          {photos?.map((photo,index) =>(
              <tr key={photo.id} className="">
                <td className="w-18 border text-blue-500 text-center text-2xl font-bold border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="w-90  h-60 border border-gray-300 px-5 py-2">
                  <img src={bmw} alt="bmw" className="w-full h-full object-cover" />
                </td>
                <td className="w-80 border text-blue-600 text-xl border-gray-300 px-4 py-2">{photo?.title}</td>
                <td className="w-25 border border-gray-300 px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </>
           }
          </tbody>
        </table>
      </div>
    );
  }


export default App;
