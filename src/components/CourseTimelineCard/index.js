import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-details-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul>
        {tagsList.map(each => (
          <li key={each.id}>
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
