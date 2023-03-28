import React from "react";
import "./css/review.css";

const Review = () => {
  return (
    <>
      <div className="review-container">
        <div className="card-container">
          <div className="head">About Us</div>
          <div className="content">
            Welcome to our sports website! We are a team of passionate sports
            enthusiasts who have come together to create a platform dedicated to
            all things sports. Our mission is to provide our readers with the
            latest news, insights, and analysis across various sports, including
            football, basketball, baseball, hockey, and more. Whether you're a
            casual fan or a die-hard supporter, we strive to offer content that
            caters to everyone's interests and preferences. Our team of
            experienced writers and editors is committed to delivering{" "}
            <span className="highlight"> high-quality content </span> that is
            accurate, informative, and engaging. We understand the importance of
            staying up-to-date with the latest developments in the sports world,
            and we work hard to ensure that our readers are always in the know.
            In addition to news and analysis, our website also features in-depth
            interviews with athletes, coaches, and other sports personalities.
            We believe that these interviews provide valuable insights into the
            world of sports and help our readers better understand the
            challenges and triumphs that come with being a professional athlete.
            At our sports website, we value diversity and inclusivity. We strive
            to create a safe and welcoming space for all sports fans, regardless
            of their race, gender, or background. We believe that sports have
            the power to bring people together and inspire positive change, and
            we are committed to using our platform to promote unity and respect.
            Thank you for visiting our sports website, and we hope that you
            enjoy our content! If you have any feedback or suggestions, please
            don't hesitate to contact us
              <br /><br /><br />

              <h1>FAQ</h1>

              What sports do you cover?<br />
We cover a wide range of sports, including football, basketball, baseball, soccer, tennis, golf, and more. You can find the full list of sports we cover on our website.<br/>

How often do you update your website with new content?<br/>
We update our website with new content on a daily basis. We strive to bring you the latest news, scores, and analysis from the world of sports..<br/>.<br/>

Can I submit a guest post or contribute to your website?<br />
Yes, we welcome guest posts and contributions from writers and experts in the sports industry. Please visit our "Contribute" page for more information on how to submit your content..<br/>.<br/>

How do I subscribe to your newsletter?<br />
You can subscribe to our newsletter by entering your email address on our website's homepage or by visiting the "Newsletter" section of our website. Our newsletter provides updates on the latest.<br/>.<br/>
          </div>
          
        </div>


        <div> <textarea placeholder="Write Us A Review"></textarea>
        
         <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Review;
