import React from "react";
import {
  Biling,
  Business,
  CTA,
  CardDeal,
  Client,
  Footer,
  Hero,
  Tastimonals,
  NavBar,
  Stats,
} from "./components";
import styles from "../constants/styles";

// ======================

const App: React.FC = () => {
  return (
    <div className="bg-primary text-white w-full overflow-hidden py-7 px-24">
      {/* <div className={`${styles.paddingX} ${styles.paddingY}`}> </div> */}
      <div className={`${styles.boxWidth}`}>
        <nav>
          <NavBar />
        </nav>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
        {/*   Hero Section*/}
      </div>

      {/* stats Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
      {/*   stats Section*/}

      {/* All compnents */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Business */}
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Business />
            </div>
          </div>
          {/* Business */}

          {/* Billing */}
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Biling />
            </div>
          </div>
          {/* Billing */}

          {/* CardDeal */}

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <CardDeal />
            </div>
          </div>
          {/* CardDeal */}

          {/* Tastimnials */}

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Tastimonals />
            </div>
          </div>
          {/* Tastimnials */}

          {/*  */}

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Client />
            </div>
          </div>

          {/*  */}

          {/*  */}

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <CTA />
            </div>
          </div>

          {/*  */}

          <Footer />
        </div>
      </div>

      {/* All compnents */}
    </div>
  );
};

export default App;
