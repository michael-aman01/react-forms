import { React, useRef, useState } from 'react'


const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        notification: ','
    })


    return(
        <>
            <h1>Hello From Form</h1>
        </>
    )
}

export default Form