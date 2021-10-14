import Attribution from './Components/Attribution';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <div className="bgr-strip" />
      <Home />
        <div className="drag-drop">Drag and drop to reorder list</div>
        <Attribution />
    </>
  );
}

export default App;
