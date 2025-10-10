import "./css/App.css"

export function App() {
    return (
        <div>
            <h1>My courses (3)</h1>
            <div className="course-list">
                <div className="course-item">
                    <div className="course-item__img">
                        <img src="../public/images/img1.jpg" alt="" />
                    </div>
                    <div className="course-item__detail">
                        <div className="course-item__body">
                            <p className="title">React.js Course</p>
                            <p className="desc">The Ultimate React and Redux Course</p>

                            <div className="rate">4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App; // default export

export const username = "test"; // name export