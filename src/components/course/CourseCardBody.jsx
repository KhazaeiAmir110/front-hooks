function CourseCardBody({course}) {
    return (
        <div className="course-item__body">
            <p className="title">{course.title}</p>
            <p className="desc">{course.description}</p>

            <div className="rate">{course.rate}</div>
        </div>
    )
}

export default CourseCardBody;