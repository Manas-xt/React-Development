import React from 'react'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Usestate from './Usestate.jsx'

const App = () => {
  return (
    <>
    <div className='box1'>
    <Contact />
    <Home />
    <About />
    </div>
    <h1>Hello World !</h1>
    <div className='box2'>Welcome to my Page ✌🏽</div>
    <div className='box3'>
      <div className='subclass1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit dolores nostrum accusamus, recusandae et, magni pariatur vero minima laboriosam, quam officia doloribus dolorem ab dolore excepturi numquam beatae vel officiis voluptates dolorum facere earum consequuntur. Ipsam quisquam amet excepturi aperiam quia at, natus rerum cum! Velit laboriosam deserunt aut, nostrum natus cumque earum iste quas, debitis porro vel et recusandae hic sapiente? Delectus earum ut quis iste id asperiores beatae atque eos porro, velit maiores praesentium distinctio similique, aliquam est eum quidem. Facilis magni reprehenderit in veritatis? Molestiae atque, nemo error aspernatur fugiat doloribus sunt itaque a maxime rem!</div>
      <div className='subclass2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nostrum quisquam veritatis accusantium eaque nesciunt animi ab, reiciendis pariatur nisi, consequuntur sequi. Cum sapiente quidem hic maxime ut, debitis aliquam deleniti id dicta dolore voluptatibus expedita incidunt! Nobis, consequuntur. Sint perferendis quia repellat laborum illo rerum nihil ullam optio enim delectus magni neque aliquid quam numquam et rem, iusto voluptas. Fugit tenetur dicta commodi officia nam voluptatem, quasi odio eius architecto voluptates mollitia quae odit? Asperiores quas facere dolorem illo laboriosam quidem optio aperiam aliquam, ducimus expedita sapiente sint autem unde, vero quia, repellendus earum voluptatibus. Aut laborum iusto necessitatibus?</div>
    </div>
    <div className="buttons-container">
    <Usestate />
    </div>
    </>
  )
}



export default App