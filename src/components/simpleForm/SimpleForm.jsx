import React from 'react'

const SimpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log (e.target.Name.value);
        console.log (e.target.email.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='Name' placeholder='Your Name' />
            <br />
            <input type="email" name='email' placeholder="Your email"/>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default SimpleForm

