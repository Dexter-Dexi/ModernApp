import styles from "../constants/styles";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";
//?__________________

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="" srcSet="" className="w-[32px] h-[32px]" />
          <p>
            <span className="text-white">20% </span>
            {"     "}Discount For {"    "}
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ">
            The Next <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Generation</span>{" "}
            <br className="sm:block hidden" /> {"  "}
          </h1>
          <div className="sm:flex hidden md:mr-4 mr-0`">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold w-full ss:text-[68px] text-[52px] ">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annule percentage rates,
          annual fees
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="Robat Hand"
          srcSet=""
          className="relative w-full
         h-full
          z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-96 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-5 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
      <div className={`sm:hidden ${styles.flexStart}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
