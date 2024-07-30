import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startAllForms } from "../action/createForm-Action";

export default function Home() {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.allForms.allForms);
  console.log('forms', forms);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form/create');
  };

  useEffect(() => {
    dispatch(startAllForms());
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1 className="title">Welcome to Form.com</h1>
      <p className="subtitle">This is a simple form builder.</p>
      <button className="btn-create" onClick={handleClick}>
        CREATE NEW FORM
      </button>
      <hr className="separator" />
      <div className="forms-section">
        <h1 className="forms-title">Forms</h1>
        {forms.length > 0 ? (
          <div className="forms-list">
            {forms.map((ele) => (
              <div className="form-item" key={ele._id}>
                <h2 className="form-name">{ele.FormName}</h2>
                <div className="form-actions">
                  <button className="btn-view" onClick={()=>{navigate('/surveyForm')}}>View</button>
                  <button className="btn-edit" onClick={()=>{navigate('/')}}>Edit</button>
                  <button className="btn-delete" onClick={()=>{navigate('/')}}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-forms-message">You have no forms created yet.</p>
        )}
      </div>
    </div>
  );
}
