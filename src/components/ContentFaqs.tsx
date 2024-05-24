import { useState } from "react";
import "../styles/contentFaqs.css";
import ICON_STAR from "../assets/images/icon-star.svg";
import ICON_PLUS from "../assets/images/icon-plus.svg";
import ICON_MINUS from "../assets/images/icon-minus.svg";
import { motion } from "framer-motion";

const ContentFaqs = () => {
  const [toggle_faqs, setToggleFaqs] = useState<number>();

  const data_faqs = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      description:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Is Frontend Mentor free?",
      description:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      description:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "How can I get help if I'm stuck on a challenge?",
      description:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
  ];

  return (
    <div className="container-faqs">
      <div className="box-faqs">
        <div className="title-faqs">
          <img src={ICON_STAR} className="icon-star" />
          <h1>FAQs</h1>
        </div>

        <div className="box-dropdown">
          {data_faqs.map((item, index: number) => (
            <div className="box-question" key={item.title}>
              <div
                className={`title-question ${
                  index !== toggle_faqs && "title-question-toggle"
                }`}
                onClick={() =>
                  setToggleFaqs(index !== toggle_faqs ? index : undefined)
                }
              >
                <h2>{item.title}</h2>{" "}
                {index === toggle_faqs ? (
                  <img src={ICON_MINUS} className="icon-plus" />
                ) : (
                  <img src={ICON_PLUS} className="icon-plus" />
                )}
              </div>

              {index === toggle_faqs && (
                <motion.div
                  initial={{ opacity: 0, y: -70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <p>{item.description}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentFaqs;
