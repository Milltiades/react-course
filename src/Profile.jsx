import React from 'react'
import { getImageUrl } from './utils.jsx'


function Item({name, isPacked}) {
    return (
        <li className='item'>
            {name} {isPacked && '😇' }
        </li>
    )
}

const Profile = () => {
    const person = {
        name: 'Gedeon',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }
  return (
    <>
    <div style={person.theme}>
    <h1>{person.name}</h1>
    <img
    className='photo'
    src='/profile.jpg'
    alt='profile-img'
    
    />
    <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
    </ul>
    </div>
    {/* <div>
        <Card>
            <Avatar
            size={100}
            person={{
                name: 'Giga Kakulia',
                imageId: 'Yfe0qp2'
            }}
            />
        </Card>
    </div> */}
    <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item
            isPacked={true}
            name="Space suit"
            />
             <Item
            isPacked={true}
            name="Helmet with a golden leaf"
            />
             <Item
            isPacked={false}
            name="Photo of Tam"
            />
        </ul>
    </section>
    </>
  )
}

export default Profile

// function Avatar({person, size}) {
//     return (
//         <img
//         className='avatar'
//         src={getImageUrl(person)}
//         alt={person.name}
//         width={size}
//         height={size}
//         />
//     )
// }
// function Card({children}) {
//     return (
//         <div className='card'>
//             {children}
//         </div>
//     )
// }