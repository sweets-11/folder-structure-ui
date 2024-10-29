import "./App.css";
import Folder from "./components/Folder/Folder";
import { data } from "./utils/Data/data"

function App() {
  return <>
    <Folder data={data} />
  </>;
}

export default App;
