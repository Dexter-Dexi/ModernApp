import styles from "../constants/styles";
import { stats } from "../constants";

//? =====================

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
      {stats.map((stat) => (
        <div
          className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mr-5`}
          key={stat.id}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] ">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
