//"use state"
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [color, setColor] = useState(null)
  
//    // On component mount, load the saved color from localStorage
//   useEffect(() => {
//     const savedColor = localStorage.getItem("backgroundColor");
//     if (savedColor) {
//       setColor(savedColor); // Set color from localStorage if it exists
//     } else {
//       setColor("white"); // Default color if none is saved
//     }
//   }, []);

//   // Function to update the color and save it to localStorage
//   const changeColor = (newColor) => {
//     setColor(newColor);
//     localStorage.setItem("backgroundColor", newColor); // Save color to localStorage
//   };
//   return (
//     <>
//       <div className="w-full h-screen duration-200"
//         style={{ backgroundColor: color }}>
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "red" }}
//               onClick={()=>setColor("red")}>Red</button>
//               <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "yellow" }}
//               onClick={()=>setColor("yellow")}>yellow</button>
//               <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "blue" }}
//               onClick={()=>setColor("blue")}>blue</button>
//               <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "black" }}
//               onClick={()=>setColor("black")}>Black</button>
//               <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "purple" }}
//               onClick={()=>setColor("purple")}>Purple</button>
//               <button className="outline-none px-4 py-1 rounded-full text-black-500 shadow-lg"
//               style={{ backgroundColor: "#F5D0FE" }}
//               onClick={()=>setColor("#F5D0FE")}>Levender</button>
//               <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "#FB7185" }}
//               onClick={()=>setColor("#FB7185")}>Light Pink</button>
//                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "#581C87" }}
//               onClick={()=>setColor("#581C87")}>Violet</button>
//                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "#334155" }}
//               onClick={()=>setColor("#334155")}>Dark Grey</button>
//               <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
//               style={{ backgroundColor: "#F8FAFC" }}
//               onClick={()=>setColor("#F8FAFC")}>white</button>
//               <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//               style={{ backgroundColor: "#A3E635" }}
//               onClick={()=>setColor("#A3E635")}>Green</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState(null);

  // On component mount, load the saved color from localStorage
  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      setColor(savedColor); // Set color from localStorage if it exists
    } else {
      setColor("white"); // Default color if none is saved
    }
  }, []);

  // Function to update the color and save it to localStorage
  const changeColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem("backgroundColor", newColor); // Save color to localStorage
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => changeColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => changeColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => changeColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => changeColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => changeColor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black-500 shadow-lg"
              style={{ backgroundColor: "#F5D0FE" }}
              onClick={() => changeColor("#F5D0FE")}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#FB7185" }}
              onClick={() => changeColor("#FB7185")}
            >
              Light Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#581C87" }}
              onClick={() => changeColor("#581C87")}
            >
              Violet
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#334155" }}
              onClick={() => changeColor("#334155")}
            >
              Dark Grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "#F8FAFC" }}
              onClick={() => changeColor("#F8FAFC")}
            >
              White
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#A3E635" }}
              onClick={() => changeColor("#A3E635")}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

