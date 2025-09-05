import React from 'react'
import "./Register.css";

function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Usa SNS</h3>
          <span className="loginDesc">技術で切り拓く、自作SNS</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">新規登録はこちら</p>
            <input type="text" className="loginInput" placeholder='ユーザー名'/>
            <input type="text" className="loginInput" placeholder='Eメール'/>
            <input
              type="text"
              className="loginInput"
              placeholder='パスワード'
            />
            <input
              type="text"
              className="loginInput"
              placeholder='確認用パスワード'
            />
            <button className='loginButton'>サインアップ</button>
            <button className="loginRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
