import styled from "@emotion/styled";
import "./App.css";
import Login from "./pages/Login";
import ToDoApp from "./pages/ToDoApp";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<ToDoApp />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
