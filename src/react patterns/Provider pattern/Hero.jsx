import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'

const Hero = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 ",
    color:  theme === "light" ? "#000" : "#fff "}}>
        <h1>Hello Gedeon!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam pariatur! Ipsam soluta inventore reiciendis error excepturi maiores deserunt et tempora architecto in, provident natus facilis perspiciatis. Assumenda laudantium veniam est beatae nobis sed possimus voluptatem accusantium consequuntur a voluptatibus, delectus, nemo similique! Aperiam ab corporis officiis dolorum excepturi vel, eius dignissimos animi, quod, unde sed. Obcaecati dolorum nobis accusantium, nihil quod consequuntur ea sapiente neque voluptatem? At quibusdam consectetur numquam in sit consequuntur recusandae minima, et libero consequatur eligendi quos, minus repellat maxime assumenda ducimus beatae distinctio, vero temporibus ipsum? Recusandae voluptates repellendus velit cum eos officiis, porro natus dolorem, neque dicta ea cumque debitis? Voluptatem odit amet sequi sint minima vero eveniet quae. Vitae iure praesentium voluptatem hic ipsa nemo reiciendis obcaecati officiis tenetur rem, optio eius assumenda necessitatibus architecto, itaque reprehenderit, rerum harum repellendus consectetur. Dolorum ipsum culpa error corrupti maxime incidunt ea animi libero molestiae sequi quisquam velit laudantium, alias aspernatur distinctio. Molestiae aperiam autem at dolores, et nisi deserunt minima dicta voluptatibus vitae provident quod adipisci, eaque, repudiandae accusantium distinctio facere maiores enim. Provident harum commodi aperiam ratione obcaecati minus vitae corporis, dicta quam, modi maiores voluptatem, repudiandae corrupti aliquid. Numquam quisquam neque iusto ullam?</p>
    </div>
  )
}

export default Hero