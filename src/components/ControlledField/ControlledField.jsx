import React, { useState } from 'react';

const ControlledField = () => {
    const [email, setEmail] = useState(' ');
    const [password, setpassword] = useState('secret');
    const[error, setError] = useState('');
    const [name, setName] = useState('');

const handleSubmit =(e) =>{
    e.preventDefault ();

    console.log(name, email, password)
}

const handleNameChange = e => {
    setName(e.target.value);
}

const handleEmailChange = e => {
    setEmail(e.target.value);
}

    const handlePasswordOnChange = e => {
        console.log (e.target.value);
        setpassword(e.target.value);

        if(password.length <6){
            setError('Password must be 6 charactres or longer')
        }

        else{
            setError(' ');
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" onChange={handleNameChange} defaultValue={name} name='name' placeholder='Name' required/>
            <br />
            <input type="email" onChange={handleEmailChange} defaultValue={email} name='Email' placeholder='Email' required/>
            <br />
            <input type="password" name="Password" placeholder='Password' onChange={ handlePasswordOnChange } defaultValue={password} required/>
            <br />
            <input type="submit" value="Submit" />
        </form>

        <p style={{color: 'red'}}>
            <small>{error}</small>
        </p>

    </div>
  )
}

export default ControlledField