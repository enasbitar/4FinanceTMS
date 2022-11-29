import "./HomePage.css";

//images
import TopSectionImage from "../../assets/main.jpeg";
import Instagram from "../../assets/nsta.jpeg";
import Facebook from "../../assets/facebook.jpeg";

// components
import CourseComponent from "../../components/CourseComponent/CourseComponent";

function HomePage() {
  return (
    <>
      <div className="home-page-container">
        <section className="top-section">
          <img className="top-section-image" src={TopSectionImage} alt="" />
          <h1 className="top-section-text">Welcome to 4Finance...</h1>
        </section>

        <div className="home-page-content">
          {/* About Us Section */}
          <section className="about-us-section">
            <h2 className="titles">About Us</h2>
            <p className="about-us-section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="about-us-section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>

          {/* Courses Section */}
          <section className="courses-section">
            <h2 className="titles">Courses</h2>

            <div className="courses-list">
              <CourseComponent
                name="AUDIT"
                description="Students can expect to learn more about specific types of auditing, including those related to fraud, taxation, internal, government, and financial crimes. While courses differ among programs, a master's in auditing often includes classes in the following subjects: Forensic accounting. Audit and information assurance..​"
                creditNumber={3}
              />
              <CourseComponent
                name="BUSINESS ETHICS"
                description="Learn from business ethics case studies and understand key business ethics issues. You will also learn corporate social responsibility, whistleblowing, insider trading, conflict of interest, code of conduct, human rights, corporate governance, code of ethics, ethical practices, moral principles, and more.​"
                creditNumber={3}
              />
              <CourseComponent
                name="CUSTOMER SERVICE"
                description="As a skill set, customer service entails several qualities like active listening, empathy, problem-solving and communication. Customer service is used in many jobs at every level. While traditionally you might think of customer care as a service from a business to a consumer, it is also applicable within a business​"
                creditNumber={3}
              />
              <CourseComponent
                name="HUMAN RESOURCES"
                description="Human Resource Management focuses on principles, methods, and technologies that are used to improve the productivity of an organisation. HR specialists achieve this through strategies and policies that increase the effectiveness of employees"
                creditNumber={3}
              />
              <CourseComponent
                name="MARKETING"
                description="Marketing studies gives a unique competitive advantage: You can learn how to promote yourself and your work. After all, marketing studies helps you understand the true meaning of value: The value of the product and the value of the person or brand that delivers said product.​"
                creditNumber={3}
              />
              <CourseComponent
                name="DIGITAL MARKETING"
                description="Digital marketing is the practice of promoting products or services with the help of digital devices and technology. In simple words, digital marketing is any form of marketing that occurs online with the help of mobile, laptop, internet, etc.​"
                creditNumber={3}
              />
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="contact-us-section">
            <h2 className="titles">Contact Us</h2>
            <div className="contact-us-social-media-container">
              <div>
                <h3>
                  <a href="tel:+96170610573">Phone number: +961 70 610 573</a>
                </h3>
                <h3>
                  <a href="mailto:info@4Finance.com">
                    Email: info@4Finance.com
                  </a>
                </h3>
              </div>

              <div>
                <a href="https://instagram.com/4_finance_?igshid=YmMyMTA2M2Y=">
                  <img
                    className="social-media-icon"
                    src={Instagram}
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.facebook.com/HB4Finance?mibextid=ZbWKwL">
                  <img
                    className="social-media-icon"
                    src={Facebook}
                    alt="Facebook"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
