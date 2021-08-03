import { useState, useEffect } from "react";
import "./App.css";
import Templates from "./components/Template";
import Memes from "./components/Meme";

const App = () => {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    async function getData() {
      const url = "https://api.imgflip.com/get_memes";
      const res = await fetch(url);
      const data = await res.json();
      setTemplates(data.data.memes);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Memes Creator</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Memes meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
};

export default App;
