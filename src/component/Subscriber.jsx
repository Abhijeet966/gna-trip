import "../styles/footer-Subscriber.css";
import en from "../assests/envelope-open-text-solid.svg";
function Subscriber() {
  return (
    <div className="footer-Subscriber">
      <img src={en} alt="Email" width="50" height="50" />
      <div className="left-section">
        <span>Your Travel Journey Starts Here</span>
        <span>Sign Up and we will send you the best deal</span>
      </div>
      <div className="right-section">
        <input type="email" placeholder="Your Email" />
        <button>Button</button>
      </div>
    </div>
  );
}

export default Subscriber;
