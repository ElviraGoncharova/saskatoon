import React from "react"



class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.title = " About us";
  }
  render() {
    
    return (


<div>
   
  <body>
    <h1>
      About Us
    </h1>
    <div class="box">
      <img
        src="images/model.jpeg"
        alt="<img"
        width="500px"
        height="500px"
        margin-right="30px"
        alt="photo of new house"
        class="feature"
      />
    </div>
    <p>
      As as a locally owned and operated business in Saskatoon you can count on
      the owner, Dmitry, making regular visits your job site ensuring that your
      project runs smoothly and no detail is overlooked.
    </p>
    <p>
      We promise to build you an affordable home that will stand the test of
      time. We’ll use our excellent long-standing relationships with industry
      suppliers and sub-contractors to your advantage.
    </p>

    <p>
      Our promise to you: When we’ve completed your new home or renovation
      project, we won’t just walk away. If there’s a problem and it’s our fault,
      we’ll fix it. It’s as simple as that. And for even more peace of mind.
    </p>

    <p>We take pride in building better homes.</p>
  </body>
</div>

);
}
}
export default AboutUs;

{/* <style>
      .p {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1em;
        margin: 0;
      }
      .box {
        float: left;
        width: 500px;
        height: 500px;
        margin-right: 30px;
      }
      body {
        background-color: rgb(221, 243, 221);
      }

    </style> */}
