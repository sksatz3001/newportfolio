import React from 'react'
import foodie from '../assets/foodie.png'
import car from '../assets/car.png'
import book from '../assets/book.png'
import coffee from '../assets/coffee.png'
import travel from '../assets/travel.png'
import space from '../assets/space.png'
import agency from '../assets/agency.png'
import shopsy from '../assets/shopsy.png'
import strawberry from '../assets/straw.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Foodie',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: foodie,
          live: "https://foodies-phi-cyan.vercel.app/",
          github: "https://github.com/sksatz3001/foodies.git"
        },
        {
          title: 'Car Rental',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: car,
          live: "https://car-rental-beige-delta.vercel.app/",
          github: "https://github.com/sksatz3001/car-rental.git"
        },
        {
          title: 'Book Store',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: book,
          live: "https://book-store-olive-six.vercel.app/",
          github: "https://github.com/sksatz3001/book-store.git"
        },
        {
          title: 'Coffee Shop',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: coffee,
          live: "https://coffee-five-steel.vercel.app/",
          github: "https://github.com/sksatz3001/coffee.git"
        },
        {
          title: 'Travel Agency',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: travel,
          live: "https://travel-rose-omega.vercel.app/",
          github: "https://github.com/sksatz3001/travel.git"
        },
        {
          title: 'Space',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: space,
          live: "https://space-ten-opal.vercel.app/",
          github: "https://github.com/sksatz3001/space.git"
        },
        {
          title: 'Agency',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: agency,
          live: "https://marketing-rho-pink.vercel.app/",
          github: "https://github.com/sksatz3001/marketing.git"
        },
        {
          title: 'Shopsy',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: shopsy,
          live: "https://shopsy-psi.vercel.app/",
          github: "https://github.com/sksatz3001/shopsy.git"
        },
        {
          title: 'Strawberry',
          desc: 'Built using HTML, Tailwind CSS, and React, delivering a visually appealing and user-friendly interface.',
          image: strawberry,
          live: "https://strawberry-three.vercel.app/",
          github: "https://github.com/sksatz3001/strawberry.git"
        }
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
