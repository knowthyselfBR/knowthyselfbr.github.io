import ImageColor from '../assets/images/placeholder-image-simple.jpg'
import ImageBW from '../assets/images/placeholder-image-simple-black-and-white.jpg'
import ImageCountdown from '../assets/images/Countdown-Timer-Feature.jpg'
import ImageLinktree from '../assets/images/link-tree-feature.jpg'
import ImagePomo from '../assets/images/pomo.webp'
import ImageCalc from '../assets/images/calc.jpg'
import ImageGithub from '../assets/images/transfer.jpg'

const ProjectsData = [
    {
        title: 'All Projects Page',
        imgUrl: ImageColor,
        tech: ['React JS','Tailwind'],
        githubUrl: 'projects',
    },
    {
        title: 'Linktree Clone',
        imgUrl: ImageLinktree,
        tech: ['React JS','Tailwind'],
        githubUrl: 'projects/linktreeclone',
    },
    {
        title: 'Api Github',
        imgUrl: ImageGithub,
        tech: ['React JS','Tailwind', 'API'],
        githubUrl: 'projects/apigithub',
    },
    {
        title: 'Timer',
        imgUrl: ImageCountdown,
        tech: ['React JS','Tailwind'],
        githubUrl: 'projects/timer',
    },
    {
        title: 'Pomodoro',
        imgUrl: ImagePomo,
        tech: ['React JS','Tailwind'],
        githubUrl: 'projects/pomodoro',
    },
    {
        title: 'React Calculator',
        imgUrl: ImageCalc,
        tech: ['React JS4','Next JS4','Tailwind4'],
        githubUrl: 'projects/calculator',
    },
    {
        title: 'Project placeholder',
        imgUrl: ImageBW,
        tech: ['React JS','Next JS','Tailwind'],
        githubUrl: 'projects/githubUrl',
    },
]

export default ProjectsData;