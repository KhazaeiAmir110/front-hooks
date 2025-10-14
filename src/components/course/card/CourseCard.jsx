import CourseCardFooter from "./CourseCardFooter.jsx";
import CourseCardBody from "./CourseCardBody.jsx";

function CourseCard(props) {
    return (
        <div key={props.course.id} className="course-list">
            <div className="course-item">
                <div className="course-item__img">
                    <img src={props.course.imageUrl} alt={props.course.title}/>
                </div>
                <div className="course-item__detail">
                    <CourseCardBody course={props.course}/>
                    <CourseCardFooter course={props.course}/>
                </div>
            </div>
        </div>

    )
}


export default CourseCard;