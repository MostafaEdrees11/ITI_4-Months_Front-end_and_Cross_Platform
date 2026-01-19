import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Navbar";
import Users from "./pages/users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Users />
    </>
  );
}

export default App;
