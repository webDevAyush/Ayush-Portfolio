import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
    sm:text-base
    '>
        <Layout className='py-2 flex items-center justify-between lg:flex-col lg:py-1'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build with <span className='text-primary dark:text-primaryDark text-2xl  px-1'>&#9825; </span> 
            by &nbsp; <Link href="https://www.linkedin.com/in/mr-ayush-chauhan/" className='underline underline-offset-2' target={"_blank"} >Ayush Chauhan</Link>
            </div>
            <Link href="https://www.linkedin.com/in/mr-ayush-chauhan/" target={"_blank"}>Buy me 🍺 this SUMMER</Link>
        </Layout>
    </footer>
  )
}

export default Footer