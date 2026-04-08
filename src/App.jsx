import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <h1>Welcome to MyApp 🚀</h1>
        <p>This is a simple React app for GitHub workflow practice.</p>
      </main>

      <Footer />
    </div>
  );
};

export default App;