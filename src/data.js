import React from 'react'
import { FaLinkedin, FaTwitter, FaLaptopCode } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineMobile } from 'react-icons/ai'
import { BsGithub, BsGit, } from 'react-icons/bs'
import { SiXcode, SiAndroidstudio, SiVisualstudiocode, SiDart, SiKotlin, SiHtml5, SiSwift, SiCss3, SiSwagger } from 'react-icons/si'
import { BiLogoReact, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoFlutter } from 'react-icons/bi'
export const images = [
    {
        mainImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2Fcodingimg.webp?alt=media&token=78538a4e-47bf-4f53-9a78-a4b18b8b8333',
        myImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2Fdeep.jpeg?alt=media&token=f89b11c6-e13c-4838-86b2-124a2af15862'

    }
]
export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    // {
    //     id: 2,
    //     url: '/profile',
    //     text: 'profile',
    // },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'contact',
    },

]

export const social = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/deepak-sardana/',
        icon: <FaLinkedin />,
    },
    {
        id: 2,
        url: 'https://twitter.com/deepaksardana03',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://github.com/mrsardana',
        icon: <BsGithub />,
    },
    {
        id: 4,
        url: 'https://www.instagram.com/mr_sardana/',
        icon: <AiFillInstagram />,
    },
]

export const expertise = [
    {
        id: 1,
        icon: <BiLogoReact />,
        type: 'Web',
        txt: `I have developed numerous web applications 
        using React, leveraging its component-based architecture, virtual DOM, and state management. 
        I have a deep understanding of React's core concepts.`
    },
    {
        id: 2,
        icon: <AiOutlineMobile />,
        type: 'Mobile',
        txt: `I possess extensive knowledge and hands-on experience in developing cross-platform mobile applications using React Native. 
        I have successfully delivered many projects on App store and Play store.`

    },
    {
        id: 3,
        icon: <FaLaptopCode />,
        type: 'Backend',
        txt: `I am well-versed in server-side JavaScript development with Node.js. I have built RESTful 
        APIs using various Node.js frameworks and libraries to create scalable and high-performance backend systems.`

    }
]
export const skills = [
    {
        id: 1,
        type: 'Languages',
        value: [
            { id: 1, name: 'JavaScript', icon: <BiLogoJavascript /> },
            { id: 2, name: 'Dart', icon: <SiDart /> },
            { id: 3, name: 'Swift', icon: <SiSwift /> },
            { id: 4, name: 'Kotlin', icon: <SiKotlin /> },
            { id: 5, name: 'HTML', icon: <SiHtml5 /> },
            { id: 6, name: 'CSS', icon: <SiCss3 /> },
        ],
    },
    {
        id: 2,
        type: 'Framework',
        value: [
            { id: 1, name: 'React', icon: <BiLogoReact /> },
            { id: 2, name: 'React-Native', icon: <BiLogoReact /> },
            { id: 3, name: 'Flutter', icon: <BiLogoFlutter /> },
            { id: 4, name: 'NodeJs', icon: <BiLogoNodejs /> },
            { id: 5, name: 'Swagger', icon: <SiSwagger /> }
        ]
    },
    {
        id: 3,
        type: 'Tools',
        value: [
            { id: 1, name: 'Git', icon: <BsGit /> },
            { id: 2, name: 'GitHub', icon: <BsGithub /> },
            { id: 3, name: 'Xcode', icon: <SiXcode /> },
            { id: 4, name: 'Android Studio', icon: <SiAndroidstudio /> },
            { id: 5, name: 'Visual Studio Code', icon: <SiVisualstudiocode /> }
        ]
    },
    {
        id: 4,
        type: 'Database',
        value: [{ id: 1, name: 'MongoDB', icon: <BiLogoMongodb /> }]
    }
]
export const projects = [
    {
        id: 1,
        name: 'My Portfolio',
        techUsed: ['React', 'JavaScript', 'HTML', 'CSS'],
        desc: `Developed my own website from very scratch to showcase my designing and development skills. 
        This portfolio is built in React and showcase all of my work experiences, skills and projects.`,
        github: 'https://github.com/mrsardana/Portfolio',
        images: ['https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FPortfolio1.png?alt=media&token=e7353de3-0137-4aa6-b56f-0ae2fc4693fa',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FPortfolio2.png?alt=media&token=59549d4d-aa0d-4cfe-b7df-9e1357136d07',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FPortfolio3.png?alt=media&token=e9f48cea-15cb-4755-a95b-ab8ff1f81376',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FPortfolio4.png?alt=media&token=041748c9-3be8-49ba-80d3-a989c61cab63']
    },
    {
        id: 2,
        name: 'Grocery Shopping App',
        techUsed: ['Flutter', 'Dart', 'Nodejs', 'Express', 'MongoDB', 'Swagger', 'Firebase'],
        desc: `Developed Grocery Shopping App using Flutter which allows user to browse products and see products 
        details and add them to cart and order them. Also, user can create new account and sign in to his account.`,
        github: 'https://github.com/mrsardana/GroceryShopingApp',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc1.png?alt=media&token=12fefcc8-38cd-42a7-83ae-02105ed0f2fc',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc2.png?alt=media&token=da801df9-1f63-4b07-a112-6df9a50767c2',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc3.png?alt=media&token=858d6b03-1dd5-456f-ae86-ae6abaeb9f02',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc4.png?alt=media&token=dcb11cb9-77fb-4005-85be-edbb01f1ea64',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc5.png?alt=media&token=262b3af5-6982-4734-a06f-69e260f8a610',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc6.png?alt=media&token=675b5c38-9bc2-4e30-8e76-95d6f95372c2',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FGroc7.png?alt=media&token=73cd0904-dc0b-45f2-a94b-ff7c673a19fb']
    },
    {
        id: 3,
        name: 'To-Do List iOS App',
        techUsed: ['Swift', 'Storyboard', 'Core data', 'Xcode', 'iOS'],
        desc: `Developed To-Do List IOS app using storyboard and Swift programing language which allows user to create, 
        update and delete to-do list task. Also, user has option to choose due date for the task`,
        github: 'https://github.com/mrsardana/MAPD714-IOS-Assignments/tree/main/Assignment2-ToDoListApp_Group12',
        images: ['https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FTodo1.png?alt=media&token=342527cc-1dc1-45f2-9f4b-cc1140ca9c8e',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FTodo2.png?alt=media&token=e1512798-17a1-43ce-90a2-7da86fe5258f',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FTodo3.png?alt=media&token=1cb5dbc4-9de7-4dd9-a35a-d4e0d787c4d8',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-a7aeb.appspot.com/o/PorfolioImages%2FTodo4.png?alt=media&token=65b596b0-d0e5-4720-a85d-b74a343a5976'
        ]
    }
]



