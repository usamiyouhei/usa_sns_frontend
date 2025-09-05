import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Usa SNS</h3>
          <span className="loginDesc">技術で切り拓く、自作SNS</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input type="text" className="loginInput" placeholder='Eメール'/>
            <input
              type="text"
              className="loginInput"
              placeholder='パスワード'
            />
            <button className='loginButton'>ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login
