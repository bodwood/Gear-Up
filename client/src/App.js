import { ChakeraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
  <ChakeraProvider>
    <Router>
      <Navbar />
      <main></main>
    </Router>

  </ChakeraProvider>
  );
}

export default App;
