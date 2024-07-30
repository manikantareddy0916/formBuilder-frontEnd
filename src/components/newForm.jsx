import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./NewForm.css"; // Import the CSS file
import { useSelector, useDispatch } from "react-redux";
import { startCreateForm } from "../action/createForm-Action";



export default function NewForm() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [textData, setTextData] = useState('');
  const [textDataP, setTextDataP] = useState('');
  const [numberData, setNumberData] = useState('');
  const [numberDataP, setNumberDataP] = useState('');
  const [emailData, setEmailData] = useState('');
  const [emailDataP, setEmailDataP] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [passwordDataP, setPasswordDataP] = useState('');
  const [dateData, setDateData] = useState('');
  const [dateDataP, setDateDataP] = useState('');

  const [toggle, setToggle] = useState(false);
  const [buttonsNum, setButtonsNum] = useState('');
  const [buttonsText, setButtonsText] = useState('');
  const [buttonsEmail, setButtonsEmail] = useState('');
  const [buttonsPassword, setButtonsPassword] = useState('');
  const [buttonsDate, setButtonsDate] = useState('');
  const [addToggle, setAddToggle] = useState(true);

  // const [formData, setFormData] = useState({
    
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData={
      FormName: data,
      textData :textData,
      textDataP :textDataP, 
      numberData :numberData, 
      numberDataP :numberDataP, 
      emailData :emailData, 
      emailDataP :emailDataP,
      passwordData: passwordData,
      passwordDataP :passwordDataP,
      dateData :dateData, 
      dateDataP :dateDataP, 
    }
  
    console.log('n',formData.length)
    
    dispatch(startCreateForm({formData,navigate}))
  }

  const handleClick = (e) => {
    const value = e.target.getAttribute('value');
    setToggle(value === 'untitledForm' ? 'untitledForm' : value);
  };

  const handleClickAddToggle = (e) => {
    e.preventDefault();
    setAddToggle(!addToggle);
  };

  const handleClickButtons = (e) => {
    e.preventDefault();
    const value = e.target.value;
    switch (value) {
      case 'text':
        setButtonsText('text');
        break;
      case 'number':
        setButtonsNum('num');
        break;
      case 'email':
        setButtonsEmail('email');
        break;
      case 'password':
        setButtonsPassword('password');
        break;
      case 'date':
        setButtonsDate('date');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1>Create New Form</h1>
      </div>

      <div className="form-editor-wrapper d-flex flex-row justify-content-center align-items-start">
        <div className="form-preview">
          <form className="form-preview-form text-center" onSubmit={handleSubmit}>
            <div className="form-title mb-2">
              {data ? <h2>{data}</h2> : <h2>Untitled Form</h2>}
              <i
                onClick={handleClick} value={'untitledForm'}
                className="fas fa-edit edit-icon"
              ></i>
            </div>

            <div className="button-section btn-spacing">
              {buttonsText === 'text' && (
                <div className="form-element">
                  <label>{textData || 'Title'}</label>
                  <i onClick={handleClick} value={'text'} className="fas fa-edit edit-icon"></i>
                  <i onClick={handleClick} value={'textDle'} className="fas fa-trash-alt delete-icon"></i>
                </div>
              )}

              {buttonsNum === 'num' && (
                <div className="form-element">
                  <label>{numberData || 'Title'}</label>
                  <i onClick={handleClick} value={'number'} className="fas fa-edit edit-icon"></i>
                  <i onClick={handleClick} value={'numberDle'} className="fas fa-trash-alt delete-icon"></i>
                </div>
              )}

              {buttonsEmail === 'email' && (
                <div className="form-element">
                  <label>{emailData || 'Title'}</label>
                  <i onClick={handleClick} value={'email'} className="fas fa-edit edit-icon"></i>
                  <i onClick={handleClick} value={'emailDle'} className="fas fa-trash-alt delete-icon"></i>
                </div>
              )}

              {buttonsPassword === 'password' && (
                <div className="form-element">
                  <label>{passwordData || 'Title'}</label>
                  <i onClick={handleClick} value={'password'} className="fas fa-edit edit-icon"></i>
                  <i onClick={handleClick} value={'passwordDle'} className="fas fa-trash-alt delete-icon"></i>
                </div>
              )}

              {buttonsDate === 'date' && (
                <div className="form-element">
                  <label>{dateData || 'Title'}</label>
                  <i onClick={handleClick} value={'date'} className="fas fa-edit edit-icon"></i>
                  <i onClick={handleClick} value={'dateDle'} className="fas fa-trash-alt delete-icon"></i>
                </div>
              )}
            </div>

            {addToggle ? (
              <button
                onClick={handleClickAddToggle}
                className="btn btn-add"
              >
                ADD INPUT
              </button>
            ) : (
              <div>
                <button
                  onClick={handleClickAddToggle}
                  className="btn btn-close-add"
                >
                  CLOSE ADD INPUT
                </button>
                <div className="button-options">
                  <button onClick={handleClickButtons} value={'text'} className="btn btn-primary">TEXT</button>
                  <button onClick={handleClickButtons} value={'number'} className="btn btn-primary">NUMBER</button>
                  <button onClick={handleClickButtons} value={'email'} className="btn btn-primary">EMAIL</button>
                  <button onClick={handleClickButtons} value={'password'} className="btn btn-primary">PASSWORD</button>
                  <button onClick={handleClickButtons} value={'date'} className="btn btn-primary">DATE</button>
                </div>
              </div>
            )}

            <input type="submit" className="btn btn-submit" value="Submit" />
          </form>
        </div>

        <div className="form-editor">
          <h1>Form Editor</h1>
          {toggle === 'untitledForm' && (
            <div>
              <input
                type="text"
                placeholder="Title"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
          )}
          {toggle === false && <p>Select to see editor</p>}
          {toggle === 'text' && <h2>Text</h2>}
          {toggle === 'number' && <h2>Number</h2>}
          {toggle === 'email' && <h2>Email</h2>}
          {toggle === 'password' && <h2>Password</h2>}
          {toggle === 'date' && <h2>Date</h2>}

          {toggle === 'text' && (
            <div>
              <input
                type="text"
                required
                placeholder="Title"
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Placeholder"
                value={textDataP}
                onChange={(e) => setTextDataP(e.target.value)}
              />
            </div>
          )}

          {toggle === 'number' && (
            <div>
              <input
                type="text"
                required
                placeholder="Title"
                value={numberData}
                onChange={(e) => setNumberData(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Placeholder"
                value={numberDataP}
                onChange={(e) => setNumberDataP(e.target.value)}
              />
            </div>
          )}

          {toggle === 'email' && (
            <div>
              <input
                type="text"
                required
                placeholder="Title"
                value={emailData}
                onChange={(e) => setEmailData(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Placeholder"
                value={emailDataP}
                onChange={(e) => setEmailDataP(e.target.value)}
              />
            </div>
          )}

          {toggle === 'password' && (
            <div>
              <input
                type="text"
                required
                placeholder="Title"
                value={passwordData}
                onChange={(e) => setPasswordData(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Placeholder"
                value={passwordDataP}
                onChange={(e) => setPasswordDataP(e.target.value)}
              />
            </div>
          )}

          {toggle === 'date' && (
            <div>
              <input
                type="date"
                required
                placeholder="Title"
                value={dateData}
                onChange={(e) => setDateData(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Placeholder"
                value={dateDataP}
                onChange={(e) => setDateDataP(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="container mt-1">
        <div className="d-flex justify-content-center">
          <button className="btn btn-create-form">CREATE FORM</button>
        </div>
      </div>
    </div>
  );
}
