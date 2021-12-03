import React, { useEffect, useState } from 'react';

const Register = () => {

  const [aadhaarNumber, setAadharNumber] = useState(0);
  const [otp, setOtp] = useState(0);
  const [aadhaarValidate, seAadhaarValidate] = useState(false)
  const [otpValidate, setOtpValidate] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const [modal, setModal] = useState(true)
  const [alert, setAlert] = useState("")

  useEffect(() => {
    // validateOtp()

    if (aadhaarNumber.length === 16) {
      seAadhaarValidate(false)
    } else {
      seAadhaarValidate(true)
    }

    if (otp.length === 6 && checkbox === false) {
      setOtpValidate(true)
    } else if (otp.length === 6 && checkbox === true) {
      setOtpValidate(false)
    }
    else {
      setOtpValidate(true)
    }

  }, [checkbox, aadhaarNumber, otp])

  function checkAadharNumber(e) {
    setAadharNumber(e.target.value)
  }

  function checkOtpNumber(e) {
    setOtp(e.target.value)
  }

  function onFormSunmit() {
    if (aadhaarNumber.length === 16 && otp.length === 6) {
      setModal(!modal)
      setAlert("Aadhar card successfully registered")
      setTimeout(() => {
        setAlert("")
      }, 3000)
    }
  }


  return (
    <section className="register-section">
      {
        alert !== "" ? <h4 className="alert-msg">{alert}</h4> : null
      }
      {
        modal === true ? <div className="register-card">
          <h4>Register Aadhaar</h4>
          <hr />
          <div className="card-contents">
            <div className="image-container">
              <img alt="aadhaar" src="./images/aadhaar.png" />
            </div>
            <div className="card-fields">
              <input type="Number" min={16} max={16} className="card-fields-input" value={aadhaarNumber} onChange={checkAadharNumber}></input>
              <button className="btn btn-verify" disabled={aadhaarValidate}>Verfiy</button>
              <div>
                <input type="checkbox" value={checkbox} onChange={() => setCheckbox(!checkbox)}></input>
                <span style={{marginLeft: "0.2rem"}}>I agree to eSign this <span style={{textDecoration: `underline`}}>KYC document</span> to get started</span>
              </div>

              <input type="number" className="card-fields-input" value={otp} onChange={checkOtpNumber}></input>
              <button className="btn btn-verify" disabled={otpValidate} onClick={onFormSunmit}>Submit</button>
            </div>

          </div>
        </div> : null
      }

    </section>
  )
}

export default Register;