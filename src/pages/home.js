import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Home = ({ history }) => {

    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState("")



    function validateEmail(email) {
        if (!email.includes('@')) {
            setAlert("Invalid Email-Id")
            setTimeout(() => {
                setAlert("")
            }, 3000)
        } else {
            history.push('/register')
        }
    }

    return (
        <section className="sign-in-section">
            {
                alert ? <h4 className="alert-msg">{alert}</h4> : null
            }
            <div className="container">
                <div className="card">
                    <header className="sign-in-header">
                        <div>
                            <h4>Sign document using</h4>
                            <p>{email}</p>
                        </ div>
                        <div>
                            <img alt="generic logo" src='./images/generic-logo-hi.png' />
                        </div>
                    </header>

                    <div className="google-login">
                        <p>sanket@digio.in uses Gmail?</p>
                        <p>login using google</p>
                        <button className="btn google-btn">Google</button>
                    </div>
                    <hr></hr>
                    <div className="validate-adddress">
                        <label>Proceed with your email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div className="card-footer">
                        <p>By continuing. I confirm to the Terms and Services and Privacy policy of <Link href="www.google.com" className="digio-link">Digio.in</Link></p>
                        <button className="btn continue-btn" onClick={() => validateEmail(email)}>CONTINUE</button>
                    </div>
                    <div className="card-footer-secondary">
                        <div className="footer-info">
                            <img src="./images/digio_logo.jpg" atl="digio" />
                            <div >
                                <p>Powered By </p>
                                <a href="www.digio.in">www.digio.in</a>
                            </div>
                        </div>
                        <div>
                            1/3 steps
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Home;