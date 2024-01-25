import React from 'react'
import { useState } from 'react';

// let nextId = 0;
// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye'},
//     { id: 2, name: 'Louise Nevelson'},
// ]

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];
const Arrays = () => {

    // const [name, setName] = useState('');
    // const [artists, setArtists] = useState([]);

    // const [artists, setArtists] = useState(
    //     initialArtists
    //   );
 
    const [shapes, setShapes] = useState(
        initialShapes
      );
      function handleClick() {
        const nextShapes = shapes.map(shape => {
          if (shape.type === 'square') {
            // No change
            return shape;
          } else {
            // Return a new circle 50px below
            return {
              ...shape,
              y: shape.y + 50,
            };
          }
        });
        // Re-render with the new array
        setShapes(nextShapes);
      }
    

  return (
    <>
 <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '500%' : '',
          width: 50,
          height: 50,
        }} />
      ))}

    {/* <h1>Inspiring sculptors:</h1>
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <button onClick={() => {
      setArtists([
        ...artists,  {id:nextId++, name:name}
      ]);
    }}>Add</button>
    <ul>
      {artists.map(artist => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul> */}

{/* <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((a) => (
            <li key={a.id}>
                {a.name}
                <button onClick={() =>setArtists(
                    artists.filter((e) => e.id !== a.id )
                ) }>delete</button>
            </li>
        ))}
      </ul> */}
  </>


  )
}

export default Arrays