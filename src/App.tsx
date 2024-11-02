import Like from "./components/Like"

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Liked")}/>      
    </div>
  );
}

export default App;
