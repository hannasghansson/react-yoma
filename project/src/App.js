// Layou
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

// Components
import Jury from "./components/Jury/Jury";
import List from "./components/List/List";
import ListImg from "./components/ListImg/ListImg";

const App = () => (
  <div>
    <Navbar />

    <List />
    <Jury />
    <ListImg />

    <Footer />
  </div>
);

export default App;
