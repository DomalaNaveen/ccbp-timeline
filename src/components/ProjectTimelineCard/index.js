import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <div>
        <img src={imageUrl} alt="project" />
        <div className="project-duration-container">
          <h1>{projectTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimeLineCard
