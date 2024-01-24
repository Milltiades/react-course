import React from 'react'
import { useState } from 'react';

const Challenge = () => {
    // const [walk, setWalk] = useState(true);

    // function handleClick() {
    //     setWalk(!walk);
    //     if(walk) {
    //         alert('Stop is next')
    //     } else {
    //         alert('Walk is next')
    //     }
    //   }
    // const [position, setPosition] = useState({ x: 0, y: 0 });
   

    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
      });
    
      function handlePlusClick() {
        setPlayer({
            ...player, score: player.score + 1
        })
       
      }
    
      function handleFirstNameChange(e) {
        setPlayer({
          ...player,
          firstName: e.target.value,
        });
      }
    
      function handleLastNameChange(e) {
        setPlayer({
            ...player,
          lastName: e.target.value
        });
      }
    

    // const [person, setPerson] = useState({
    //     name: 'Niki de Saint Phalle',
    //     artwork: {
    //       title: 'Blue Nana',
    //       city: 'Hamburg',
    //       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    //     }
    //   });

    //   function handleNameChange(e) {
    //     setPerson({
    //       ...person,
    //       name: e.target.value
    //     });
    //   }
    
    //   function handleTitleChange(e) {
    //     setPerson({
    //       ...person,
    //       artwork: {
    //         ...person.artwork,
    //         title: e.target.value
    //       }
    //     });
    //   }
    
    //   function handleCityChange(e) {
    //     setPerson({
    //       ...person,
    //       artwork: {
    //         ...person.artwork,
    //         city: e.target.value
    //       }
    //     });
    //   }
    
    //   function handleImageChange(e) {
    //     setPerson({
    //       ...person,
    //       artwork: {
    //         ...person.artwork,
    //         image: e.target.value
    //       }
    //     });
    //   }

    // const [person, setPerson] = useState({
    //     firstName: 'Barbara',
    //     lastName: 'Hepworth',
    //     email: 'bhepworth@sculpture.com'
    //   });
    
    //   function handleFirstNameChange(e) {
    //     setPerson({
    //         ...person,
    //         firstName : e.target.value

    //     })
    //   }
    
    //   function handleLastNameChange(e) {
    //     setPerson({
    //         ...person,
    //         lastName : e.target.value

    //     })
    //   }
    
    //   function handleEmailChange(e) {
    //     setPerson({
    //         ...person,
    //         email : e.target.value

    //     })
    //   }
    

  return (
    <>
      {/* <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1> */}
        {/* <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div> */}


{/* <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p> */}
        {/* <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      /> */}


<label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  )
}

export default Challenge