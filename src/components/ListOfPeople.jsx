import React from "react";
import styled from "styled-components";

const People = (props) => {
  const { people } = props;

  const myList = [
    {
      name: "Johnny",
      objectID: 0,
      age: 26,
      gender: "male",
      url: "https://img.freepik.com/premium-photo/portrait-serious-handsome-man-looking-camera-against-white-background_23-2148213410.jpg",
      aboutMe:
        "I am a professional web developer with 20 years of on the job experience and a complete lack of respect for Jr Developers.",
    },
    {
      name: "Tiarra",
      id: 1,
      age: 30,
      gender: "female",
      url: "https://www.un.org/sites/un2.un.org/files/2021/04/004-alexander-khimushin.jpg",
      aboutMe:
        " Kila mtu anayo haki ya kushiriki katika maisha ya utamaduni ya jamii yo yote, na ana haki ya kufurahia ustadi wa kazi na kushiriki katika maendeleo ya mambo ya sayansi na faida zinazotokana nayo.",
    },
    {
      name: "Proffessor Powers",
      objectID: 2,
      age: 23,
      gender: "male",
      url: "https://photos.lensculture.com/large/e88d815d-da98-4d24-94e6-a4c2a47c4093.jpg",
      aboutMe:
        "Nee how my friend I meditate by day and pray by night. If you like my style venmo me and I will show you the way of the budah. Peace and love to all. @asian-boy669",
    },
    {
      name: "Enrique Salvador",
      objectID: 3,
      age: 35,
      gender: "female",
      url: "https://photos.lensculture.com/large/8fb1f7cf-28c0-4e63-98ea-9a1bd2df2f82.jpg",
      aboutMe:
        "I am a covid scientist. I think china very populated with virus so I move to states.",
    },
    {
      name: "Dr Robertson",
      objectID: 4,
      age: 46,
      gender: "male",
      url: "https://www.un.org/sites/un2.un.org/files/019-alexander-khimushin.jpg",
      aboutMe:
        "I am Dr Robertson. A very successfull indian and african biochemical reactor manufacturer",
    },
  ];
  return (
    <>
      {people.map((person) => {
        return (
          <PersonBox key={person.id}>
            {person.file ? (
              <img
                src={URL.createObjectURL(person.file)}
                alt={person.name}
                style={{ width: 120, height: 150 }}
              />
            ) : (
              <img
                src="https://www.radware.com/blog/wp-content/uploads/2020/06/anonymous-960x638.jpg"
                alt="anonymous"
                style={{ width: 120, height: 150 }}
              />
            )}

            <ul>
              <h3>{person.name ? person.name : 'I am Anonymous'}</h3>
              <p>{person.bio ? person.bio : "“Greetings, citizens of the United States,” the figure said in a creepy, distorted voice. “This is a message from Anonymous to the Minneapolis Police Department.” The masked announcer addressed Floyd's killing and the larger pattern of police misconduct, concluding, “We will be exposing your many crimes to the world."}</p>
            </ul>
          </PersonBox>
        );
      })}
      {myList.map((person) => (
        <PersonBox
          key={person.objectID}
          keyid={person.objectID % 2 === 0 ? "true" : "false"}>
          <img
            src={person.url}
            alt={person.name}
            style={{ width: 120, height: 150 }}
          />
          <ul>
            <h3>{person.name}</h3>
            <p>{person.aboutMe}</p>
          </ul>
        </PersonBox>
      ))}
    </>
  );
};

const PersonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: ${(props) => (props.keyid === "true" ? "7%" : "2%")};
  border: 5px groove #3f1363;
  font-family: "Wix Madefor Display", sans-serif;
  background-color: #ffffff;
  border-radius: 40px;
  width: 90%;

  & ul {
  }
  & img {
    border-radius: 50%;
    box-shadow: 5px 5px 10px black;
    object-fit: cover;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 10px;
  }
  &:hover {
    position: relative;
    display: flex;
    border-color: black;
    background-color: gainsboro;

    box-shadow: 0px 1px 20px lightseagreen, 0px 5px 5px black;
  }
`;
export default People;
