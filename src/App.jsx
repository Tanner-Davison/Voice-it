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
    !trueOrFalse ? "select image" : +selectedFile.name
  );
  const [bioClass, setBioClass] = useState(false);

  const welcome = {
    title: <h1>VOICE-IT</h1>,
    greeting: <h3>Welcome to </h3>,
  };

  useEffect(() => {
    if (selectedFile) {
      console.log("selectedFile is not null. It contains:", selectedFile);
      setUploadPic("File Name : " + selectedFile.name);
    } else if (!selectedFile) {
      console.log("selectedFile is null.");
    }
    bio.length > 0 ? setBioClass(true) : setBioClass(false);
  }, [selectedFile, uploadPic, bio, bioClass]);

  const onChangeTextHandle = (event) => {
    if (event.target.id === "uploadPic") {
      setSelectedFile(event.target.files[0]);
    } else if (event.target.id === "bio") {
      setBio(event.target.value);
      console.log(bioClass);
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
    setText(" ");
    setCountID(countID + 1);
    setTrueOrFalse(false);
    setSelectedFile(null);
    setUploadPic(
      trueOrFalse ? "select image" : "Last File : " + selectedFile.name
    );
    setBioClass(false);
  };

  return (
    <>
      <HeaderContainer>
        <div className="greeting">
          {welcome.greeting} <span id='welcome'>{welcome.title}</span>
        </div>
        <div className="input-wrapper-container">
          <label htmlFor="firstLastName">
            Name<span>:</span>
            <input
              type="text"
              size="24"
              id="firstLastName"
              placeholder="exampleName || @handle"
              onChange={onChangeTextHandle}
            />
          </label>

          <label htmlFor="bio">
            Create Voice-It<span>:</span>
            <textarea
              className={bioClass ? "typing" : "notTyping"}
              type="text"
              id="bio"
              rows="14"
              cols="24"
              wrap="soft"
              maxLength="300"
              placeholder="every opinion matters...Whats yours?"
              onChange={onChangeTextHandle}
            />
          </label>
          <label htmlFor="uploadPic">
            Add Photo :
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
          <button type="button" onClick={onClickHandler}>
            VOICE-IT{" "}
            <span className="material-symbols-outlined" id='microphone'> campaign </span>
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
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "Wix Madefor Display", sans-serif;
  font-size: 20px;
  & .greeting {
    display: flex;
    font-weight: bolder;
    font-size: 30px;
  }
  & #welcome {
    position: relative;
    border-left: 3px solid black;
    padding-left: 5px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  & .greeting > h3 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 125px;
    text-align: end;
    margin-right: 20px;
  }

  & label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bolder;
    gap: 10px;
  }
  & .input-wrapper-container {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 50px;
    width: 400px;
    gap: 20px;
    margin-bottom: 25px;
    border-radius: 50px;
  }

  & button {
    position: relative;
    top: 12px;
    right: 14%;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    width: 120px;
    height: 30px;
    background-color: #4d8cf2;
    font-size: 15px;
    padding: 5px;
    color: #fff;
    border: 2px solid #9ec3ff;
    border-radius: 9px;
    margin-left: 10px;
    
  }


  & button:hover {
    display: flex;
    background-color: #3b73ce;
    border-color: #729fe7;
    width: 115px;
    height: 35px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & #microphone {
    margin-left:6px;
    color:white;
  }
  & .notTyping {
    display: flex;
    background-color: #e1ebee;
    border-radius: 10px;
    border: 3px groove #e0ffff;
    height: 45px;
    resize: none;
  }
  
  & .typing {
    display: flex;
    background-color: #d5e6eb;
    border-radius: 10px;
    border: 3px groove #e0ffff;
    height: 45px;
    word-wrap: break-word;
    font-family: "Wix Madefor Display", sans-serif;
  }
  & #firstLastName {
    border-radius: 10px;
    height: 25px;
    font-family: "Wix Madefor Display", sans-serif;
    font-weight: bold;
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
  & label:hover .fileChosen {
    background-color: #3b73ce;
    border-color: #729fe7;
    cursor: pointer;
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

  @media only screen and (max-width: 470px) {
    & .greeting {
      display: flex;
      flex-direction: row;
      font-size: 22px;
      padding: 10px;
      align-items: center;
      justify-content: space-evenly;
    }
    & .greeting > h3 {
      width: 125px;
      text-align: end;
      margin-right: 5px;
    }
    & #welcome {
      position: relative;
      border-left: 5px solid black;
      padding-left: 5px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      right: -3px;
      background-color: #d9edf3;
    }
    position: relative;
    justify-self: center;
    margin-left: 20px;
    border: 3px solid black;
    height: 100%;
    width: 92%;
    right: 8px;
    & .input-wrapper-container {
      width: 90%;
    }
  }
`;

export default App;
