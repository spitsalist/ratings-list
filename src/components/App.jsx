import Ratings from "./Ratings";
import List from "./List";

function App() {
  return (
      <div className="App" style={appStyle}>
          <h1>Application rating</h1>
          <Ratings />
          <>
          <List />
          </>
      </div>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};
export default App;
