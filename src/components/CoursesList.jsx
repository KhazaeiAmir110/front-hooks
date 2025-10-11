function CoursesList() {
    return (
        <div className="course-list">
                <div className="course-item">
                    <div className="course-item__img">
                        <img src="../../public/images/img1.jpg" alt=""/>
                    </div>
                    <div className="course-item__detail">
                        <div className="course-item__body">
                            <p className="title">React.js Course</p>
                            <p className="desc">The Ultimate React and Redux Course</p>

                            <div className="rate">4</div>
                        </div>

                        {/*  footer  */}
                        <div className="course-item__footer">
                            <div className="tags">
                                <sman className="badge badge--secondary">React.js</sman>
                                <sman className="badge badge--secondary">Front</sman>
                            </div>
                            <div className="caption">
                                <div className="date">
                                    {new Date().toLocaleDateString(
                                        "fa-IR", {month: "short", day: "2-digit"})
                                    }
                                </div>
                                <span className="badge badge--primary">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CoursesList;