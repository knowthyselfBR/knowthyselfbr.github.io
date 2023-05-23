import React from 'react'
import ProjectsItem from './sectionsComponents/ProjectsItem'
import SectionTitle from './sectionsComponents/SectionTitle'
import ProjectsData from '../data/ProjectsData'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function ProjectsPageHome() {
  return (
    <div className='py-12'>
        <SectionTitle id='projects'>Projects</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {ProjectsData.map(project => (
            <Link to={project.githubUrl}>
              <ProjectsItem
                key={project.title}
                title={project.title}
                imgUrl={project.imgUrl}
                tech={project.tech}
                githubUrl={project.githubUrl}
              />
            </Link>
          ))}
        </div>
    </div>
  )
}

export default ProjectsPageHome