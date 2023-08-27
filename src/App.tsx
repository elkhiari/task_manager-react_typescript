import React, { useState } from 'react';
import Headers from './components/Headers';
import AddButton from './components/AddButton';
import Todos from './components/Todos';


function App() {
  const [modelActive, setModelActive] = useState<boolean>(false);
  return (
    <div className={`container max-w-3xl mx-auto p-2 relative h-[100vh] duration-300`}>
      <Headers />
      <Todos />
      <AddButton   modelActive={modelActive} setModelActive={setModelActive} />
    </div>
  );
}

export default App;
