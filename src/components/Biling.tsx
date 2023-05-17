import { apple, bill, google } from "../assets";
import styles, { layout } from "../constants/styles";

//?___________________

export const Biling = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="Billing"
          srcSet=""
          className="w-[100%] h-[100%] relative z-5"
        />
        <div className="absolute z-[3]  -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0]  -left-1/2 bottom-72 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" />
          billing & invocing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          porro sapiente debitis iste soluta necessitatibus earum recusandae
          facilis, suscipit minima sunt asperiores! Veritatis, a minima.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt=""
            srcSet=""
            className="w-[128px] h-[42px] object-contain] mr-5"
          />
          <img
            src={google}
            alt=""
            srcSet=""
            className="w-[128px] h-[42px] object-contain] "
          />
        </div>
      </div>
    </section>
  );
};
