import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "John D., Tech Startup Owner",
            rating: 5,
            text: "Sathish transformed our outdated website into a modern, user-friendly platform. The site's speed and responsiveness have significantly improved!"
        },
        {
            id: 2,
            name: "Emma R., E-commerce Store Owner",
            rating: 4.8,
            text: "The SEO strategies implemented by Sathish boosted our website traffic by 80% in just three months. His data-driven approach delivered outstanding results!"
        },
        {
            id: 3,
            name: "Carlos M., SaaS Product Manager",
            rating: 5,
            text: "Sathish's expertise in React.js and Tailwind CSS helped us build a fast and visually stunning web application. His attention to detail and efficiency were impressive!"
        },
        {
            id: 4,
            name: "Sophia L., Small Business Owner",
            rating: 5,
            text: "Our social media campaigns handled by Sathish generated more engagement and leads than ever before. His creativity and audience insights were spot on!"
        },
        {
            id: 5,
            name: "Michael T., Retail Business Owner",
            rating: 5,
            text: "Working with Sathish on our Next.js project was a game-changer. He delivered a fully functional e-commerce platform that exceeded our expectations."
        },
        {
            id: 6,
            name: "Rachel K., Travel Agency Owner",
            rating: 5,
            text: "Sathish set up and optimized our Google Ads campaigns, leading to a 60% increase in conversions. His expertise saved us time and money!"
        },
        {
            id: 7,
            name: "Peter S., Blogger",
            rating: 5,
            text: "From WordPress customization to implementing unique plugins, Sathish delivered a website that perfectly fits our brand's needs."
        },
        {
            id: 8,
            name: " Olivia W., Fashion Brand Owner",
            rating: 5,
            text: "Sathish designed our Shopify store with a sleek, professional look. The intuitive user experience has significantly increased our sales."
        },
        {
            id: 9,
            name: "David A., Real Estate Consultant",
            rating: 5,
            text: "The digital marketing insights provided by Sathish helped us identify and target the right audience, resulting in a significant ROI. Highly recommended!"
        },
        {
            id: 10,
            name: "Nina J., Fitness Coach",
            rating: 5,
            text: "Sathish’s email marketing strategy boosted our newsletter open rates by 50%. His ability to craft engaging content is exceptional.I totally loved his work."
        }
    ]

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What our Customer Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 h-50 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>CEO, Webelite Builders</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
