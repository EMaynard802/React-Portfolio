import React from "react";


const Project = () => {
  const projectsArr = [

    {
      title: "Eat Da Burger",
      linkDeployed: "https://burger-logger-node-app.herokuapp.com/index",
      linkGithub: "https://github.com/EMaynard802/Burger",
      imgSrc: "./images/burgerMunch.png",
      description: "This full stack application allows the user to make a wishlist of burgers to munch, while also storing a list of burgers previously munched."
    },
    {
      title: "Crime-Wave-Data",
      linkDeployed: "https://shelbypalumbo.github.io/Heat-Wave-Crime-Data/",
      linkGithub: "https://github.com/shelbypalumbo/Heat-Wave-Crime-Data",
      imgSrc: "./images/crime.png",
      description: "For our first group project we were asked to come together as a team to solve a real world problem using data from multiple server-side API requests."
    },
    {
      title: "Employee Profile Generator",
      linkGithub: "https://github.com/EMaynard802/Template-Engine---Employee-Summary",
      imgSrc: "./images/profilegen.jpg",
      description: "Using a NodeJS interface to create a PDF of the information provided from user's information on GitHub."
    },
    {
      title: "Password Generator",
      linkDeployed: "https://emaynard802.github.io/Password-Generator/.",
      linkGithub: "https://emaynard802.github.io/Password-Generator/.",
      imgSrc: "./images/pwGen.png",
      description: "Password Generator App"
    },
    {
      title: "Weather",
      linkDeployed: "https://emaynard802.github.io/Weather-Dashboard/",
      linkGithub: "https://emaynard802.github.io/Weather-Dashboard/",
      imgSrc: "./images/weather.png",
      description: "Weather Dashboard App."
    },
    {
      title: "Workout Tracker",
      linkDeployed: "https://workout--tracker--app.herokuapp.com",
      linkGithub: "https://github.com/EMaynard802/Workout-Tracker/",
      imgSrc: "./images/workout.png",
      description: "Workout Tracker App."
    }
  ];

  return (

    projectsArr.map(project => (
      <div className="col m6" key={project.title} >
        <div className="card">

          <div className="card-image">
            <img src={project.imgSrc} alt={project.title} className="responsive-img project-image" />

          </div>

          <div className="card-content">
            <span className="card-title" id="darkBlack"><strong>{project.title}</strong></span>
            <p>  {project.description}</p>
          </div>

          <div className="card-action">
            <a href={project.linkGithub}>GitHub Repository</a>
            <a href={project.linkDeployed}>Deployed</a>
          </div>

        </div>
      </div>
    ))

  )
}

export default Project