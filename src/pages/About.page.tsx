/* eslint-disable @typescript-eslint/no-use-before-define */
import Lottie from "lottie-react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts";
import service from "../assests/animation/services.json";
import styles from "./About.module.css";
import git from "../assests/animation/git.json";
import deploy from "../assests/animation/deploy.json";

/* eslint-disable prettier/prettier */
function AboutPage() {
  // const [loading, setLoading] = useState<boolean>(true);
  const style = {
    width: "100%",
    height: "100%"
  };

  return (
    <MainLayout>
      <div className={classNames(styles.about_page)}>
        <div className={classNames(styles.about_page_content)}>
          <div>
            <h4> About My Project</h4>
            <p>
              Thank you for the opportunity to work on this frontend developer
              assignment. Crafting this Star Wars Planets Directory has been an
              exhilarating journey, pushing the boundaries of my skills in API
              integration, frontend development, and design. By leveraging the
              SWAPI, I've created a dynamic application that not only showcases
              essential information about each planet but also highlights their
              notable residents, providing users with a comprehensive
              experience. Implementing features such as pagination ensures
              seamless navigation through the vast universe of Star Wars
              planets. Through meticulous styling and responsiveness
              considerations, I've strived to deliver a visually appealing and
              user-friendly interface, optimizing the experience across diverse
              devices and screen sizes. Whether it's the choice of framework or
              library, or the intricate details of CSS animations and layout
              techniques, every decision was made with the aim of delivering a
              polished and engaging product. I am grateful for the opportunity
              to tackle this assignment, and I'm excited about the prospect of
              further discussing my approach and contributions.
            </p>
          </div>
          <div className={classNames(styles.abouts_links, "center")}>
            <span className={classNames(styles.abouts_links, "flex", "center")}>
              GitHub:
              <Link
                to="https://github.com/supriya224/pagination-task"
                className={classNames(styles.github)}
                aria-current="page">
                <Lottie
                  animationData={git}
                  style={{ width: "3rem" }}
                  download="lazy"
                />
              </Link>
            </span>
            <span className={classNames(styles.abouts_links, "flex")}>
              GitHub Deploy:{" "}
              <Link
                to="https://supriya224.github.io/pagination-task-company/"
                className={classNames(styles.github)}
                aria-current="page">
                <Lottie
                  animationData={deploy}
                  style={{ width: "3rem" }}
                  download="lazy"
                />
              </Link>{" "}
            </span>
          </div>
        </div>
        <div>
          <Lottie animationData={service} style={style} download="lazy" />
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
