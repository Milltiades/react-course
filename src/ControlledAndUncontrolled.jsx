import React, { useRef, useState } from 'react'

const ControlledAndUncontrolled = () => {
    // const inputRef = useRef(null)


    // function handleSubmit() {
    //     alert(`Name : ${inputRef.current.value}`)
    // }
    const [name, setName] = useState('')

    function handleSubmit() {
        alert(`Name: ${name}`)
    }
  return (
    // <div>
    //     <h1>GeeksForGeeks</h1>
    //     <h3>Uncontrolled Component</h3>

    //     <form onSubmit={handleSubmit}>
    //         <label >Name :</label>
    //         <input type="text"
    //         name="name"
    //         ref={inputRef} />
    //         <button type='submit'>Submit</button>
    //     </form>
    // </div>
    <div>
    <h1>GeeksForGeeks</h1>
    <h3>Uncontrolled Component</h3>

    <form onSubmit={handleSubmit}>
        <label >Name :</label>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default ControlledAndUncontrolled