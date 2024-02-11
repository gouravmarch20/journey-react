import "./App.css";

import OtpInput from "./components/otp-input"
import NextInputAutoSelect from "./components/NextInputAutoSelect"
const onOtpSubmit = (otp) => {
  console.log("Login Successful", otp)
}
function App() {
  return (
    <div className="App">
      <h1>Login with Phone</h1>
      <NextInputAutoSelect/>
      {/* <OtpInput length={4} onOtpSubmit={onOtpSubmit} /> */}

      {/* <PhoneOtpForm /> */}
    </div>
  );
}

export default App;
