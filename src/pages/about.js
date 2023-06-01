import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import profilePic from '../../public/images/profile/about-img.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)


    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })


    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            // console.log(latest)
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}



const about = () => {
    return (
        <>
            <Head>
                <title>Ayush Chauhan || About Page </title>
                <meta name="description" content="i am front-end developer and UX designer" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className=' grid w-full grid-cols-8 gap-16 sm:gap-8 '>

                        <div className='col-span-3 flex  flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2>
                            <p className='font-medium'>Welcome to Ayush's Portfolio! We specialize in frontend development, focusing on React.js, Next.js, Git, Tailwind CSS, and more. Our goal is to create captivating and user-friendly websites with seamless functionality and stunning design. We prioritize responsive design, ensuring your website looks great on all devices.
                            </p>
                            <p className='my-4 font-medium'>I believe that design is about more than just making things look pretty it is about solving problems and creating intuitive, enjoyable experiences for users.  </p>

                            <p className='font-medium'> With extensive experience collaborating with clients of all sizes, we value effective communication and tailor our solutions to meet your specific needs.Explore our portfolio to see our projects. Thank you for visiting Ayush's Portfolio! Let's embark on this exciting journey together!</p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:col-span-8
                            md:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="mr.developer" className="w-full h-auto rounded-2xl" priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>


                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className=' text-xl  font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className=' text-xl  font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm   '>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className=' text-xl  font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm   '>Years Of Experience</h2>
                            </div>
                        </div>

                    </div>


                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main >
        </>
    )
}

export default about