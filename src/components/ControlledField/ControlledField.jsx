import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setpassword] = useState('')

const handleSubmit =(e) =>{
    e.preventDefault ();

    console.log('submitted')

}

    const handlePasswordOnChange = e =>{
console.log (e.target.value)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name='Email' placeholder='Email' required/>
            <br />
            <input type="password" name="Password" placeholder='Password' id="" onChange={ handlePasswordOnChange } defaultValue={password} required/>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default ControlledField