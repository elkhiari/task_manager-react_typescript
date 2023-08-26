import React from 'react';
import Headers from './components/Headers';
import AddButton from './components/AddButton';
import Todos from './components/Todos';


function App() {
  return (
    <div className="container max-w-3xl mx-auto p-2 relative h-[100vh] ">
      <Headers />
      <Todos />
      <AddButton />
    </div>
  );
}

export default App;
