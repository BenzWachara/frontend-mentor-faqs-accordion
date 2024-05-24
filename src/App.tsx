import "./App.css";
import ContentFaqs from "./components/ContentFaqs";

function App() {
  return (
    <>
      <div className="bg-header-app"></div>
      <div className="app-body">
        <div className="container-app">
          <ContentFaqs />
        </div>
        <div className="footer-credit">
          <p>
            Challenge by{" "}
            <a
              className="link-a"
              href="https://www.frontendmentor.io/profile/BenzWachara"
              target="_blank"
            >
              Frontend Mentor.
            </a>{" "}
            Coded by{" "}
            <a
              className="link-a"
              href="https://www.instagram.com/wachara.workspace/"
              target="_blank"
            >
              Watcharapol
            </a>{" "}
            |{" "}
            <a
              className="link-a"
              href="https://github.com/BenzWachara/frontend-mentor-faqs-accordion"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
