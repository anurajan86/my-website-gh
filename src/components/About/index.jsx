import './style.css';
import article4 from '../../images/tennis.jpeg';
import article5 from '../../images/cv.jpeg';

const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
            <p>
            Hi, my name is Anuraag Govindarajan. I’m a 4th-year undergraduate majoring in Computer Science at Georgia Tech, and I plan to also complete my graduate degree here in December 2022. My interests are in Machine Learning and Data Analytics. Even though I have taken several courses in these areas, and gained exposure to advanced methods, these fields still continue to amaze me with their capacity for creativity and innovation. I actually first started thinking about computer science’s applications to the world after my first python programming course. Before college, I played a lot of tennis and I was and am a huge fan of the sport.
            </p>
            <div className='row' style={{padding:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'30%', width:'30%'}} src={article4} />
            </div>
            <br/>
            <p>
            Ultimately, I would like to apply the computational concepts I have been learning to extracurricular fields. I am driven and extremely passionate about the work you do there, and I love getting involved in new things to broaden my skill set. In summer 2020, I started working as a research intern at the Georgia Tech Research Institute, where I work on developing and improving an evolutionary framework using Python and SQL. I research methods in genetic programming, computer vision, and natural language processing as part of my work, and I am continuing my work part-time currently while taking courses. 
            </p>
            <div className='row' style={{padding:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'30%', width:'30%'}} src={article5} />
            </div>
        </div>
    )
}

export default About