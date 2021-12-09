import { useState } from "react";
import "./styles.css";

const flagsDictionary = {
  "🇮🇳": "India",
  "🇧🇩": "Bangladesh",
  "🇧🇹": "Bhutan",
  "🇨🇳": "China",
  "🇦🇫": "Afghanistan"
};

var falgsWehave = Object.keys(flagsDictionary);

export default function App() {
  const [inputText, setInputText] = useState("");
  const [meaning, setMeaning] = useState("");
  const changeHandler = (e) => {
    var userInput = e.target.value;
    setInputText(e.target.value);
    if (userInput in flagsDictionary) {
      var meaningFromChecking = flagsDictionary[userInput];
      setMeaning(meaningFromChecking);
    } else {
      setMeaning("No meaning Found sorry");
    }
  };

  const emojiClickHandler = (e) => {
    console.log(e, "eee");
    var meaningFromChecking = flagsDictionary[e];
    setMeaning(meaningFromChecking);
    console.log("hi");
  };

  return (
    <div className="App">
      <h1>Flag Pedia</h1>
      <input value={inputText} onChange={changeHandler} />
      <h2>{meaning}</h2>

      {falgsWehave.map((emoji) => (
        <span
          style={{ fontSize: "larger", padding: "1rem", cursor: "pointer" }}
          key={emoji}
          onClick={() => emojiClickHandler(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
