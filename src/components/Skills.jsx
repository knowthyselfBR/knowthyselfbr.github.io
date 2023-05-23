import React from 'react'
import SectionTitle from './sectionsComponents/SectionTitle';
import SkillsData from '../data/SkillsData';
import SkillsItem from './sectionsComponents/SkillsItem';

function Skills () {
    return (
        <div className='py-12'>
            <SectionTitle>Skills</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {SkillsData.map(service => (
                    <SkillsItem 
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    )
};

export default Skills;