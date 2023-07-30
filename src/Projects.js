import React, { useState, useEffect } from 'react'
import { projects } from './data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsGithub, } from 'react-icons/bs'
const Projects = () => {
    const [firstIndex, setFirstIndex] = useState(0)
    const [secondIndex, setSecondIndex] = useState(0)
    const [thirdIndex, setThirdIndex] = useState(0)
    const firstLastIndex = projects[0].images.length - 1
    const secondLastIndex = projects[1].images.length - 1
    const thirdLastIndex = projects[2].images.length - 1
    const changeImage = (id, val) => {
        if (id === 1) {
            setFirstIndex((firstIndex) => firstIndex + val)
        }
        if (id === 2) {
            setSecondIndex((secondIndex) => secondIndex + val)
        }
        if (id === 3) {
            setThirdIndex((thirdIndex) => thirdIndex + val)
        }

    }
    useEffect(() => {
        if (firstIndex < 0) {
            setFirstIndex(firstLastIndex)
        }
        if (firstIndex > firstLastIndex) {
            setFirstIndex(0)
        }
        if (secondIndex < 0) {
            setSecondIndex(secondLastIndex)
        }
        if (secondIndex > secondLastIndex) {
            setSecondIndex(0)
        }
        if (thirdIndex < 0) {
            setThirdIndex(thirdLastIndex)
        }
        if (thirdIndex > thirdLastIndex) {
            setThirdIndex(0)
        }
    }, [firstIndex, secondIndex, thirdIndex, firstLastIndex, secondLastIndex, thirdLastIndex])
    return (
        <div>
            <div className="gradient"></div>
            <section className='projects'>
                <h2>Projects I have completed</h2>
                <h3>Latest Projects</h3>
                {
                    projects.map((project) => {
                        const { id, name, techUsed, desc, images, github } = project
                        return <article className='project-article' key={id}>
                            <div className='project-text'>
                                <h3>{name}</h3>
                                <p className='projects-para'>{desc}</p>
                                <h4>Technologies used:</h4>
                                <ul>
                                    {
                                        techUsed.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                                <a href={github} target="_blank" rel="noreferrer"> <BsGithub /> Github Link</a>
                            </div>
                            <div className='project-img-btn' key={id}>
                                <img src={
                                    images[id === 1 ? firstIndex : id === 2 ? secondIndex : thirdIndex]
                                } alt="" />
                                <div>
                                    <button className='prev' onClick={() => changeImage(id, -1)}><FiChevronLeft /></button>
                                    <button className='next' onClick={() => changeImage(id, 1)}><FiChevronRight /></button>
                                </div>
                            </div>
                        </article>
                    })
                }

            </section>
        </div>
    )
}

export default Projects