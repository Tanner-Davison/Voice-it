import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const welcome = {
    title: "React APP",
    greeting: "Welcome to my",
  };
  const onChangeTextHandle = (event) => {
    setText(event.target.value);
  };
  const onClickHandler = () => {
    myList.push({ name: { text }, id: 5, key: 5 });
    console.log(myList);
    setText("");
  };
  const myList = [
    {
      name: "Johnny",
      age: 26,
      gender: "male",
      url: "https://img.freepik.com/premium-photo/portrait-serious-handsome-man-looking-camera-against-white-background_23-2148213410.jpg",
      aboutMe:
        "I am a professional web developer with 20 years of on the job experience and a complete lack of respect for Jr Developers.",
    },
    {
      name: "Tiarra",
      age: 30,
      gender: "female",
      url: "https://www.un.org/sites/un2.un.org/files/2021/04/004-alexander-khimushin.jpg",
      aboutMe:
        " Kila mtu anayo haki ya kushiriki katika maisha ya utamaduni ya jamii yo yote, na ana haki ya kufurahia ustadi wa kazi na kushiriki katika maendeleo ya mambo ya sayansi na faida zinazotokana nayo.",
    },
    {
      name: "Proffessor Powers",
      age: 23,
      gender: "male",
      url: "https://photos.lensculture.com/large/e88d815d-da98-4d24-94e6-a4c2a47c4093.jpg",
      aboutMe:
        "Nee how my friend I meditate by day and pray by night. If you like my style venmo me and I will show you the way of the budah. Peace and love to all. @asian-boy669",
    },
    {
      name: "Enrique Salvador",
      age: 35,
      gender: "female",
      url: "https://photos.lensculture.com/large/8fb1f7cf-28c0-4e63-98ea-9a1bd2df2f82.jpg",
      aboutMe:
        "I am a covid scientist. I think china very populated with virus so I move to states.",
    },
    {
      name: "Dr Robertson",
      age: 46,
      gender: "male",
      url: "https://www.un.org/sites/un2.un.org/files/019-alexander-khimushin.jpg",
      aboutMe:
        "I am Dr Robertson. A very successfull indian and african biochemical reactor manufacturer",
    },
  ];

  return (
    <>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Name</label>
      <input type="text" id="search" onChange={onChangeTextHandle} />
      <br></br>
      <br></br>
      <label htmlFor="uploadPic">Profile Picture</label>
      <input type="file" id="uploadPic" onChange={onChangeTextHandle} />
      <br></br>
      <br></br>
      <label htmlFor="bio">upload Bio</label>
      <input type="text" id="bio" onChange={onChangeTextHandle} />

      <button type="button" onClick={onClickHandler}>
        upload
      </button>
      <div>
        {myList.map((person) => {
          return (
            <div className="personDiv">
              <img
                src={person.url}
                alt={person.name}
                style={{ width: 100, height: 150 }}></img>
              <ul key="500">
                <li>{person.name}</li>
                <p>{person.aboutMe}</p>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
