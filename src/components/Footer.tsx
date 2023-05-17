import styles from "../constants/styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="">
        <img src={logo} alt="" className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph}  mt-4 max-w-[310px] mr-20`}>
          A new way to make the payments easy, reliable and secure
        </p>
      </div>
      <div className="flex-[1.5] flex w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={index}>
            <h4 className="font-poppins font-medium text-[18px] mb-5">
              {footerLink.title}
            </h4>
            <ul className="">
              {footerLink.links.map((link, index) => (
                <li
                  className={`font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  key={index}
                >
                  {" "}
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-medium text-[18px] text-center">
        2021 HooBank. All Rights are Reserved
      </p>
      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt=""
            srcSet=""
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
