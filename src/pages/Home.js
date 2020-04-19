import React from "react";

const Home = () => {
  return (

    <div className="container">
      <div className="section">

        <div className="row">
          <div className="col s12 m4">
            <img src="./images/me.jpg"
              alt="profile image"
              className="circle responsive-img" id="profileImg" />
          </div>

          <div className="col s12 m8">
            <h4 id="darkOrange">about eleanor</h4>
            <p className="left-align light"> Aspiring Full Stack Web Developer leveraging business systems management skills to insure efficient mobile-first design and
            innovative web development.
          </p>
          <p>
            My educational background consist of Bachelor’s degree in Business Management from Saint Joseph College for Women. Although I have a successful career as an ERP Systems Manager, I am looking for a new challenge. <strong>I love to solve problems.</strong> Whether it's finding the most elegant way to write a line of code, or hiking a Class 5 route, I enjoy pushing limits and discovering solutions.</p>
            <p>As a Web Development student, I continually find opportunities to prove my creativity, flexibility, and detailed-eye. </p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home;