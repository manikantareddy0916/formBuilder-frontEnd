import { useSelector } from "react-redux";

export default function SurveyForm() {
  const forms = useSelector((state) => state.allForms.allForms);

  // Log the emailData for debugging purposes
  forms.forEach((ele) => {
    if (ele.emailData === '') {
      console.log('empty');
    } else {
      console.log('not empty', ele.emailData);
    }
  });

  return (
    <div>
      <h1>Survey Form</h1>
      <form>
        {forms.map((ele, i) => {
          // Only render the form elements if emailData is not empty
          if (ele.emailData === '') {
            return null; // Skip rendering if emailData is empty
          } else {
            return (
              <div key={i}>
                {/* <label>{ele.emailData}</label>
                <input placeholder={ele.emailDataP} /> */}
              </div>
            );
          }
        })}
      </form>
    </div>
  );
}
