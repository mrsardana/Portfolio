import React, { useState } from 'react'
import Categories from './Categories';
import { skills } from './data'
const allCategories = ['all', ...new Set(skills.map((skill) => skill.type))]
const Skills = () => {
    const [skillsItems, setSkillsItems] = useState(skills)
    const [type, setType] = useState('all')
    const filterItem = (type) => {
        if (type === 'all') {
            setType('all')
            setSkillsItems(skills)
            return;
        }
        const newItem = skills.filter((item) => item.type === type)
        setType(type)
        setSkillsItems(newItem)

    }

    return (
        <section className='container skills-container'>
            <h1>Technical Skills</h1>
            <div className="underline"></div>
            <Categories filterItem={filterItem} categories={allCategories} type={type} />
            <div className='skills' >
                {
                    skillsItems.map((item) => {
                        const { id, type, value } = item
                        return <section key={id} className='skills-items'>
                            <div>
                                <h1>{type}</h1>
                                <div className='underline'></div>
                            </div>
                            {value.map((value) => {
                                const { id, name, icon } = value
                                return <div key={id} className='skills-item-values'>
                                    <div>
                                        <h2>{icon} </h2>
                                        <p>{name}</p>
                                    </div>
                                </div>
                            })}
                        </section>

                    })
                }
            </div>
        </section>

    )
}

export default Skills