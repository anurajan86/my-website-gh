import "./style.css";
import article2 from '../../images/gs.png';
import article3 from '../../images/gtri.png';
import article4 from '../../images/c1.png';

const About = () => {
  return (
    <div className="works">
      <h3>Company: Capital One</h3>
      <h4>Role: Data Science Intern</h4>
      <h5>Dates: June - August 2022 </h5>
      <p>
        As part of my role in the Document Intelligence and Vision Engineering team, I worked on incorporating active learning in existing
        information extraction pipelines. My work included designing a full workflow that takes in model performance metrics prediction
        probabilities and outputs a set of testing samples that should be used for re-training based on various uncertainty sampling techniques.
      </p>
      <div className='row' style={{padding:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'30%', width:'30%'}} src={article4} />
      </div>
      <h3>Company: Georgia Tech Research Institute</h3>
      <h4>Role: Graduate Research Assistant</h4>
      <h5>Dates: January - December 2022 </h5>
      <p>
        During my graduate studies at Georgia Tech, I am working as a Graduate Research Assistant with the Electro-Optical Systems Laboratory at GTRI. I am 
        currently working on interrogating Machine Learning models to better explain their inner workings, or why they make the decisions they make.
      </p>
      <div className='row' style={{padding:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'30%', width:'30%'}} src={article3} />
      </div>
      <br />
      <h1>Experience</h1>
      <h3>Company: Goldman Sachs</h3>
      <h4>Role: Engineering Summer Analyst - Production Runtime Experience</h4>
      <h5>Dates: June - August 2021 </h5>
      <p>
        I was a part of the Production Runtime Experience team within Enterprise Technology Operations. During the internship, I implemented
        and tested a variety of clustering models on large datasets, using combinations of categorical and numerical data. Eventually, the task 
        evolved into text clustering. Then, I experimented with NLP and Cosine Similarity algorithms to classify ticket submissions based on text
        summaries. I also developed hierarchical clustering models to group the ticket submissions based on text data. For data analysis, I used
        dimension reduction techniques to analyze and visualize patterns among ticket submissions and patterns within results from the 
        clustering models. Additionally, to optimize future production workflow, we created robust documentation for space admins that detailed
        clearly what areas of ticket submission and resolution can be optimized. These optimizations were suggested based on the results from the 
        Machine Learning models.
      </p>
      <div className='row' style={{padding:'2em', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <img style={{height:'20%', width:'20%'}} src={article2} />
      </div>
      <br />
      <h3>Company: Georgia Tech Research Institute</h3>
      <h4>Role: Machine Learning Researcher</h4>
      <h5>Dates: May 2020 - December 2021</h5>
      <p>
        As part of the Electro-Optical Systems Laboratory, we work on developing and improving an evolutionary framework using Python and MySQL.
        I research new methods in genetic programming, computer vision, and natural language processing, and I am continuing my work part time
        while taking courses. Recently, I have been trying to improve the framework's object detection capabilities by integrating a new Convolutional 
        Neural Network backbone into the framework. The backbone is based on YOLO neural architecture.
      </p>
    </div>
  );
};

export default About;