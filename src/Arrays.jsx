import React from 'react'
import { useState } from 'react';

// let nextId = 0;
// let initialArtists = [
//     { id: 0, name: 'Marta Colvin Andrade' },
//     { id: 1, name: 'Lamidi Olonade Fakeye'},
//     { id: 2, name: 'Louise Nevelson'},
// ]

// let initialShapes = [
//     { id: 0, type: 'circle', x: 50, y: 100 },
//     { id: 1, type: 'square', x: 150, y: 100 },
//     { id: 2, type: 'circle', x: 250, y: 100 },
//   ];

// let initialCounters = [
//     0, 0, 0
//   ];

// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// let initialArray = [
//     {id: 0, name: 'giga0'},
//     {id: 1, name: 'giga1'},
//     {id: 2, name: 'giga2'},
//     {id: 3, name: 'giga3'},
//     {id: 4, name: 'giga4'},
// ]
// let arrId = 4;

// const initialList = [
//     { id: 0, title: 'Big Bellies' },
//     { id: 1, title: 'Lunar Landscape' },
//     { id: 2, title: 'Terracotta Army' },
//   ];


let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const Arrays = () => {

    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
      initialList
    );
  
    function handleToggleMyList(artworkId, nextSeen) {
  
      setMyList(myList.map(artwork => {
        if(artwork.id === artworkId) {
            return { ...artwork, seen: nextSeen}
        } else {
            return artwork
        }
      }));
    }
  
    function handleToggleYourList(artworkId, nextSeen) {
    
      setYourList(yourList.map(artwork => {
        if(artwork.id === artworkId) {
            return {...artwork, seen: nextSeen}
        } else {
            return artwork
        }
      }));
    }

//     const [list, setList] = useState(initialList);

//   function handleClick() {
//     const nextList = [...list];
//     nextList.reverse();
//     setList(nextList);
//   }

//     const [human, setHuman] = useState(initialArray)
//     const [newName, setNewName] = useState('')
//     const [insertAt, setInsertAt] = useState(0)

//     function handleCLickAdd() {
        
// const newArr = [...human.slice(0, insertAt), {id: arrId++, name:newName}, ...human.slice(insertAt)]
// setHuman(newArr)
//     }

    // const [name, setName] = useState('');
    // const [artists, setArtists] = useState(
    //   initialArtists
    // );
  
    // function handleClick() {
    //   const insertAt = 1; // Could be any index
    //   const nextArtists = [...artists.slice(0, insertAt),{ id: nextId++, name: name },...artists.slice(insertAt)];
    //   setArtists(nextArtists);
    //   setName('');
    //   console.log(artists)
    // }
  

    // const [counters, setCounters] = useState(
    //     initialCounters
    //   );
    
    //   function handleIncrementClick(index) {
    //     const nextCounters = counters.map((c, i) => {
    //       if (i === index) {
    //         // Increment the clicked counter
    //         return c + 1;
    //       } else {
    //         // The rest haven't changed
    //         return c;
    //       }
    //     });
    //     setCounters(nextCounters);
    //   }

    // const [name, setName] = useState('');
    // const [artists, setArtists] = useState([]);

    // const [artists, setArtists] = useState(
    //     initialArtists
    //   );
 
    // const [shapes, setShapes] = useState(
    //     initialShapes
    //   );
    //   function handleClick() {
    //     const nextShapes = shapes.map(shape => {
    //       if (shape.type === 'square') {
    //         // No change
    //         return shape;
    //       } else {
    //         // Return a new circle 50px below
    //         return {
    //           ...shape,
    //           y: shape.y + 50,
    //         };
    //       }
    //     });
    //     // Re-render with the new array
    //     setShapes(nextShapes);
    //   }
    

  return (
    <>

<h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />

{/* <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul> */}


 {/* <button onClick={handleClick}>
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
      ))} */}

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

{/* <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul> */}

{/* <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}

      {/* <ul>
        {
            human.map((h,i) => (
                <li key={i} onClick={() => setInsertAt(i)}>{h.name}</li>
            ))
        }
      </ul>
      <input type="text" onChange={(e) => setNewName(e.target.value)}/>
      <button onClick={handleCLickAdd}>add</button> */}
  </>


  )
}

export default Arrays

function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }