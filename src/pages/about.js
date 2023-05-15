import { useEffect } from "react";

function AboutPage() {
    let imgUrl = "http://localhost:4000/about";

    useEffect(() => {
        fetch(imgUrl)
            .then(res => {
                if (res.ok) {
                    return res.blob();
                }
            })
            .then(data => {
                console.log('about data: ', data);
            });
    }, [imgUrl]);

    console.log()
    return (
        <div className="about-container">
            <div className="about-image-wrapper">
                <img className="about-image" src="http://localhost:4000/about" alt="profile" />
            </div>

            <div className="about-content-wrapper">
                <h1 className="about-title">About Me</h1>
                <p className="about-content">I am a full-stack web developer with a passion for learning and creating. I have a background in education and I am currently working as a teacher. I am looking to transition into a career in web development. I am a hard worker and a quick learner. I am looking for a position where I can continue to learn and grow as a developer.</p>
            </div>
        </div>
    );
}

export default AboutPage;