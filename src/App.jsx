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
	};
	const formSubmitHandler = () =>{
		setText(" ");
		setCountID(countID + 1);
		setTrueOrFalse(false);
		setSelectedFile(null);
		setUploadPic(
			trueOrFalse ? "select image" : "Last File : " + selectedFile.name
		);
		setBioClass(false);
		setBio("");
	}
	return (
		<>
			<HeaderContainer>
				<div className='greeting'>
					{welcome.greeting}{" "}
					<span id='welcome'>
						{welcome.title}
						<p id='beHeard'>Where your voice matters . . .</p>
					</span>
				</div>
				<form onSubmit={formSubmitHandler} className='input-wrapper-container'>
					<label htmlFor='firstLastName'>
						Name<span>:</span>
						<input
							type='text'
							size='24'
							id='firstLastName'
							placeholder='exampleName || @handle'
							onChange={onChangeTextHandle}
						/>
					</label>

					<label htmlFor='bio'>
						Create Voice-It<span>:</span>
						<textarea
							className={bioClass ? "typing" : "notTyping"}
							type='text'
							id='bio'
							rows='14'
							cols='24'
							wrap='soft'
							maxLength='300'
							placeholder="Everyone's opinion matters... Whats yours?"
							value={bio}
							onChange={onChangeTextHandle}
						/>
					</label>
					<label htmlFor='uploadPic'>
						Add Photo :
						<label
							className={trueOrFalse ? "chooseFile" : "fileChosen"}
							htmlFor='uploadPic'>
							{uploadPic}
							<span className='material-symbols-outlined'>upgrade</span>
						</label>
						<input
							type='file'
							id='uploadPic'
							title=' '
							onChange={onChangeTextHandle}
							
						/>
					</label>
					<button
						type='button'
						onClick={onClickHandler}>
						VOICE-IT{" "}
						<span
							className='material-symbols-outlined'
							id='microphone'>
							{" "}
							campaign{" "}
						</span>
					</button>
				</form>
			</HeaderContainer>
			<div>
				<People people={people} />
			</div>
		</>
	);
}

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flext-start;
	justify-content: center;
	width: 100%;
	font-family: "Wix Madefor Display", sans-serif;
	font-size: 20px;
	background: white;
	color: white;
	margin-top: 20px;
	background-image: linear-gradient(to right, #434343 0%, black 100%);
	border-radius: 50px;
	border: 4px outset black;

	& .greeting {
		display: flex;
		font-weight: bolder;
		font-size: 30px;
	}
	& #welcome {
		position: relative;

		border-left: 6px solid black;
		padding-left: 5px;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
	
	}
	& #beHeard {
		position: relative;
		font-size: 17px;
		display: flex;
		right: 160px;
		top: 105px;
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
		padding: 10px;
	}
	& .input-wrapper-container {
		position: sticky;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		width: 400px;
		gap: 20px;
		margin-bottom: 25px;
		margin-top: 15px;
		border-radius: 50px;
		border-left: 3px solid white;
		border-right: 3px solid white;
		box-shadow: 0px 1px 20px lightblue, 0px 5px 10px blueviolet;
	}
	& .input-wrapper-container:hover {
		box-shadow: 0px 1px 20px rebeccapurple, 0px 5px 10px rebeccapurple;
	}

	& button {
		position: relative;
		display: flex;
		justify-content: center;
		align-self: flex-start;
		left: 100px;
		width: 120px;
		height: 30px;
		background-color: #4d8cf2;
		font-size: 15px;
		padding: 5px;
		color: #fff;
		border: 2px solid #4c70ab;
		border-radius: 9px;
		margin-top: 20px;
		border-radius: 50px;
	}
	& button:hover {
		display: flex;
		background-color: #3b73ce;
		border-color: #729fe7;
		width: 120px;
		height: 30px;
		border-radius: 11px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	& #microphone {
		margin-left: 6px;
		color: white;
	}
	& .notTyping {
		display: flex;
		background-color: #e1ebee;
		border-radius: 10px;
		border: 3px groove #e0ffff;
		height: 45px;
		resize: none;
		font-family: "Wix Madefor Display", sans-serif;
		align-items: center;
		text-align: start;
		justify-content: flex-end;
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

	@media only screen and (max-width: 1059px) {
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
		& .input-wrapper-container {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			margin-left: 300px;
			padding: 10px;
			width: 400px;
			gap: 20px;
			margin-bottom: 25px;
			border-radius: 50px;
		}
		& #welcome {
			position: relative;
			border-left: 5px solid black;
			padding-left: 5px;
			border-top-left-radius: 50px;
			border-bottom-left-radius: 50px;
			right: -3px;
		}
		position: relative;
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-items: center;
		margin-left: 20px;
		border: 6px groove black;
		border-radius: 50px;
		height: 100%;
		width: 92%;
		right: 8px;
		gap: 50px;

		& .input-wrapper-container {
			position: relative;
			display: flex;
			right: 150px;
			border-radius: 25px;
			border: black;
			box-shadow: 0px 1px 20px lightblue, 0px 5px 10px blueviolet;
		}
	}
`;

export default App;
