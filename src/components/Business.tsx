import { features } from "../constants";
import styles, { layout } from "../constants/styles";
import Button from "./Button";
import { fCard } from "../interfaces/interfaces";
//?_____________________

const FeatureCard = ({ index, content, title, icon }: fCard) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w[64px] h-[64]px rounded-full ${styles.flexCenter} bg-dimBlue]`}
      >
        <img
          src={icon}
          alt="icon"
          srcSet=""
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] mb-2">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[18px] mb-1 w-[450px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,{" "}
          <br
            className="sm:block hidden
        
         "
          />
          we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credits card on the market
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionInfo} flex-col`}>
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Business;
