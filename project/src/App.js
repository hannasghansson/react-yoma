//import "./App.css";

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
// commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
// velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// mollit anim id est laborum

// import Heading from "./components/Heading/Heading"; <Heading />
// import Navbar from "./components/Navbar/Navbar";  <Navbar />
import React from "react";
import ReadMore from "./components/ReadMore/ReadMore";

function App() {
  return (
    <div>
      <ReadMore />
    </div>
  );
}

export default App;
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// function App() {
//   const [readMore, setReadMore] = useState(false);
//   const extraContent = (
//     <div>
//       <p className="extra-content">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
//         consectetur neque ab porro quasi culpa nulla rerum quis minus
//         voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
//         Maxime.
//       </p>
//     </div>
//   );
//   const linkName = readMore ? <IoIosArrowUp /> : <IoIosArrowDown />;
//   return (
//     <div className="App ">
//       <div className="container">
//         <div className="row border-bottom">
//           <div className="col me-0">
//             <h2 className="me-0">Namn Efternamn</h2>
//           </div>
//           <div
//             className="col"
//             onClick={() => {
//               setReadMore(!readMore);
//             }}
//           >
//             <h2>{linkName}</h2>
//           </div>
//         </div>

//         <div>{readMore && extraContent}</div>
//       </div>
//     </div>
//   );
// }

// export default App;
