import { HashRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Welcome Gamma 🚀</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
