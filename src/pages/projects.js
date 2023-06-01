import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/project-1.png";
import project2 from "../../public/images/projects/project-2.png";
import project3 from "../../public/images/projects/project-3.png";
import project4 from "../../public/images/projects/project-4.png";
import project5 from "../../public/images/projects/project-5.png";
import project6 from "../../public/images/projects/project-6.png";
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark  dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 sm:rounded-2xl xs:rounded-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%]
            xs:w-full xs:rounded-[1.5rem]
            ' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary  dark:text-primaryDark font-medium text-xl xl:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='py-2 flex items-center '>
                    <Link href={github} className="w-10" target='_blank'><GithubIcon /> </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light dark:text-dark dark:bg-light p-2 px-6 text-lg font-semibold 
                    sm:px-4 sm:text-base'>Visit Project </Link>
                </div>
            </div>
        </article>
    )
}


const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light  dark:bg-dark  dark:border-light p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary   dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold  dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className=' text-lg font-semibold underline  dark:text-light md:text-base'>Visit</Link>
                    <Link href={github} className="w-8 md:w-6" target='_blank'>
                        <GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Ayush Chauhan || Projects Page </title>
                <meta name="description" content="All the projects i have made till now" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center   dark:text-light'>
                <Layout pt-16>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Gericht Restaurant"
                                img={project1}
                                github='/'
                                summary='A restaurant website, built using the power of React JS! This is designed to showcase our delicious menu, inviting atmosphere, and exceptional customer service. With our use of React JS, we are able to create a seamless user experience that is both visually stunning and easy to navigate. From browsing our menu to making a reservation, our website makes it simple to enjoy the full experience of our restaurant. Whether you are a regular or a first-time visitor, we hope our website helps you get a taste of what we have to offer and entices you to come dine with us soon.'
                                link="https://frabjous-baklava-04b01e.netlify.app/"
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Delta || Digital Agency Website"
                                img={project2}
                                github='/'
                                summary='This is our digital marketing agency website, built with React JS, is fully responsive and optimized for all devices. It was build With a focus on a seamless user experience, our fast and visually stunning website showcases our expertise and approach.With the help of JavaScript and Tailwind CSS, we are able to create a website that is both functional and aesthetically pleasing.'
                                link="https://wondrous-squirrel-55dc32.netlify.app/"
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="SpecsCart || Landing Page"
                                img={project3}
                                github='/'
                                summary='It is a landing page designed for Specs Store to get a better experiece for there customers.'
                                link="https://ephemeral-lily-64f332.netlify.app/"
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProjects
                                title="Whats App Clone Application"
                                img={project4}
                                github='/'
                                summary='Welcome to our WhatsApp clone app built with React JS and powered by Context API. Experience real-time messaging with the ability to send and receive messages instantly. Our app provides a seamless user interface, allowing you to stay connected with friends and family. With the use of React JS and Context API, we ensure a smooth and efficient messaging experience. Stay in touch and enjoy the convenience of real-time communication with our WhatsApp clone app.'
                                link="https://dulcet-sopapillas-ed5c60.netlify.app/"
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Ceera || Ecommerce Website "
                                img={project5}
                                github='https://github.com/webDevAyush/Ecommerce-Website'
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency.'
                                link="https://beamish-boba-8a48c0.netlify.app/"
                                type="Featured Project"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Cafena || Coffee Store Website"
                                img={project6}
                                github='https://github.com/webDevAyush/Coffee_Store_Website'
                                summary='Our coffee store website, built with React JS and Js and Css, showcases our unique blends, customer reviews, and blogs from coffee enthusiasts. With a fast and responsive design, it is easy to navigate and discover the perfect coffee for your taste buds. Check out our authentic customer reviews and write for our blog to share your insights. Explore our website and enjoy the full coffee experience.'
                                link="https://silver-piroshki-6a2b20.netlify.app/"
                                type="Featured Project"

                            />
                        </div>
                    </div>
                </Layout>
            </main>

        </>
    )
}

export default projects