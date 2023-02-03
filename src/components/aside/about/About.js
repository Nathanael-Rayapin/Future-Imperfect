import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h3 className="mt-5 mb-3">About</h3>
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
        mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna
        enim, ac accumsan tortor cursus at phasellus sed ultricies.
      </p>
      <button className="btn learn-more my-4">Learn More</button>
      <hr />
      <div className="icon-lists d-flex my-5">
        <i className="bi bi-twitter"></i>
        <i className="bi bi-facebook mx-4"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-rss mx-4"></i>
        <i className="bi bi-envelope-fill"></i>
      </div>
      <p className="copyright">
        © UNTITLED. DESIGN: HTML5 UP. IMAGES: UNSPLASH.
      </p>
    </div>
  );
};

export default About;
