function CourseCardFooter({course}) {
    return (
        <div className="course-item__footer">
            <div className="tags">
                {course.tags.map((tag) => {
                    return (
                        <span key={tag} className="badge badge--secondary">{tag}</span>
                    )
                })}
            </div>
            <div className="caption">
                <div className="date">
                    {new Date(course.start).toLocaleDateString()}
                </div>
                <span className="badge badge--primary">{course.status}</span>
            </div>
        </div>
    )
}

export default CourseCardFooter;