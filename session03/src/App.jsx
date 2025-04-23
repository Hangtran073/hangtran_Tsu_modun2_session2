import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormUserList from "./baitap01/FormUserList";
import UserList from "./baitap01/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserList />
    </>
  );
}

export default App;
