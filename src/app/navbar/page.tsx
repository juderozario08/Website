'use client'
import React from 'react'
import Link from 'next/link'
import './navbar.css'

const home = { title: 'Home', href: '/', id: 'home' }
const about = { title: 'About', href: '/about', id: 'about' }
const contact = { title: 'Contact', href: '/contact', id: 'contact' }
const projects = { title: 'Projects', href: '/projects', id: 'projects' }
const styles = 'px-3 py-1 text-center'

const navbar = () => {
  return (
    <div className='bg-white w-full rounded-lg text-center py-2 h-auto
                    text-black hoverAnimation'>
        <Link href={home.href} id={home.id}
            className={`${styles}`}>{home.title}</Link>
        <Link href={about.href} id={about.id}
            className={`${styles}`}>{about.title}</Link>
        <Link href={projects.href} id={projects.id}
            className={`${styles}`}>{projects.title}</Link>
        <Link href={contact.href} id={contact.id}
            className={`${styles}`}>{contact.title}</Link>
    </div>
  )
}

export default navbar