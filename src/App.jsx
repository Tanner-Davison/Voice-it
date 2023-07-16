import { useState, useEffect } from "react";
import "./App.css";
import People from "./components/ListOfPeople";
import styled from "styled-components";

function App() {
  const [text, setText] = useState("");
  const [people, setPeople] = useState([]);
  const [countID, setCountID] = useState(0);
  const [bio, setBio] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [uploadPic, setUploadPic] = useState(
    !trueOrFalse ? "select image" :  + selectedFile.name
  );
  const welcome = {
    title: "React APP",
    greeting: "Welcome to my",
  };
  useEffect(() => {
    if (selectedFile) {
      console.log("selectedFile is not null. It contains:", selectedFile);
      setUploadPic("File Name : " + selectedFile.name);
    } else {
      console.log("selectedFile is null.");
    }
  }, [selectedFile,uploadPic]);
  const onChangeTextHandle = (event) => {
    if (event.target.id === "uploadPic") {
      setSelectedFile(event.target.files[0]);
      
    } else if (event.target.id === "bio") {
      setBio(event.target.value);
    } else {
      setText(event.target.value);
    }

    if (selectedFile) {
      console.log("selectedFile is not null. It contains:", selectedFile);
      setUploadPic("File Name : " + selectedFile.name);
    } else {
      console.log("selectedFile is null.");
    }
  };

  const onClickHandler = () => {
    const newPerson = {
      name: text,
      id: countID,
      file: selectedFile,
      bio: bio,
    };
    setPeople((prevPeople) => [newPerson, ...prevPeople]);
    setText(" ")
    setCountID(countID + 1);
    setTrueOrFalse(false)
    setSelectedFile(null)
    setUploadPic(trueOrFalse ? "select image" : "previous upload : "+selectedFile.name);
    console.log(people);
  };

  return (
    <>
      <HeaderContainer>
        <h1>
          {welcome.greeting} {welcome.title}
        </h1>
        <div className="input-wrapper-container">
          <label htmlFor="search">
            Name<span>:</span>
            <input
              type="text"
              size="24"
              id="search"
              placeholder={text}
              onChange={onChangeTextHandle}
            />
          </label>
          <label htmlFor="uploadPic">
            Avatar :
            <label
              className={trueOrFalse ? "chooseFile" : "fileChosen"}
              htmlFor="uploadPic">
              {uploadPic}
              <span className="material-symbols-outlined">upgrade</span>
            </label>
            <input
              type="file"
              id="uploadPic"
              title=" "
              onChange={onChangeTextHandle}
            />
          </label>

          <label htmlFor="bio">
            Write Bio<span>:</span>
            <input type="text" id="bio" onChange={onChangeTextHandle} />
          </label>
          <button type="button" onClick={onClickHandler}>
            post <span className="material-symbols-outlined"> campaign </span>
          </button>
        </div>
      </HeaderContainer>
      <div>
        <People people={people} />
      </div>
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "Wix Madefor Display", sans-serif;
  font-size: 20px;

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    gap: 10px;
  }
  & .input-wrapper-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 400px;
    gap: 20px;
  }

  & button {
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    width: 80px;
    height: 30px;
    background-color: #4d8cf2;
    font-size: 15px;
    padding: 5px;
    color: #fff;
    border: 2px solid #9ec3ff;
    border-radius: 9px;
  }
  & button:only-of-type span {
    visibility: hidden;
  }
  & button:hover:only-of-type span {
    visibility: visible;
    margin-left: 10px;
  }
  & button:hover {
    display: flex;
    background-color: #3b73ce;
    border-color: #729fe7;
    padding: 15px;
    justify-content: center;
    align-items: center;
  }
  span {
    position: relative;
    display: flex;
    align-self: center;
  }
  input[type="file"] {
    position: absolute;
    display: none;
  }
  & label > .fileChosen {
    background-color: #4d8cf2;
    font-size: 15px;
    padding: 3px;
    border: 2px solid #9ec3ff;
    border-radius: 9px;
    margin-left: 20px;
    color: white;
  }
  & label > .chooseFile {
    background-color: #4d8cf2;
    font-size: 15px;
    padding: 3px;
    border: 2px solid #9ec3ff;
    border-radius: 9px;
    margin-left: 20px;
    color: yellow;
  }
  & .chooseFile:hover {
    background-color: #3b73ce;
    border-color: #729fe7;
    cursor: pointer;
  }
  & .chooseFile .material-symbols-outlined {
    visibility: hidden;
  }
  & .chooseFile:hover .material-symbols-outlined {
    visibility: visible;
    padding: 5px;
  }
`;

export default App;
