import React from 'react'

const FormAction = () => {

    const handleFormAction = (formData) =>{
        console.log(formData.get('Name'));
        console.log(formData.get('Email'));
    }

  return (
    <div>
        <form action={handleFormAction}>
            <input type="text" name='Name' placeholder='Name' />
            <br />
            <input type="email" name='Email' placeholder='Email' />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default FormAction