import { useContext, useEffect } from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

import { GlobalContext } from "@/context/globalContext";
import Bars from "@/components/Other/Bars";
import AnimatedCharactersDetailsLeft from "@/components/Animations/AnimatedTextDetailsLeft";
import AnimatedTextButton from "@/components/Animations/AnimatedTextButton";

import { TemplateRouteProps } from "@/interfaces/TemplateRouteProps/TemplateRouteProps";

const TemplateRoute = ({ image, children, title, details, textButton, email, github, link }: TemplateRouteProps) => {
  const { isMobile, isTablet } = useContext(GlobalContext);

  useEffect(() => {
    window.scrollTo(-100, -110);
  }, []);

  return (
    <section className="w-screen h-full flex flex-col bg-gradient2">
      <div className="w-full min-h-dvh flex justify-center items-center relative overflow-hidden bg-brand2 flex-row">
        <div className="w-1/2 h-full flex justify-center flex-col z-30 absolute sm:flex-col left-5 sm:left-10 lg:left-44 top-1/4 sm:top-auto">
          <AnimatedCharactersDetailsLeft duration={1} animate>
            <h2 className="text-white leading-none tracking-widest font-medium w-full text-4xl sm:text-6xl lg:text-8xl sm:whitespace-nowrap">{title}</h2>
          </AnimatedCharactersDetailsLeft>
          <Bars />
          <AnimatedCharactersDetailsLeft duration={1.1} animate>
            <div className="w-full min-w-48 mb-1 h-12 lg:mb-8 lg:h-20 lg:w-full lg:min-w-full lg:pr-60">
              <h3 className="w-full text-white text-sm leading-4 sm:text-xl sm:leading-5 lg:text-3xl lg:leading-10 tracking-widest break-all whitespace-normal">{details}</h3>
            </div>
          </AnimatedCharactersDetailsLeft>
          <AnimatedTextButton duration={1.2} width="calc(100vw - 1.25rem)" animate>
            <Link className="w-40 h-11 text-xs relative top-1/2 left-2/4 mb-0 -translate-x-1/2 sm:w-40 sm:h-12 sm:text-sm hover:bg-brand1 hover:border-2 hover:border-solid hover:border-brand1 lg:w-48 lg:h-12 lg:text-base sm:top-auto sm:left-auto sm:translate-x-0 flex items-center justify-center text-white cursor-pointer no-underline font-extrabold whitespace-nowrap bg-transparent text-center leading-3 border-2 border-solid border-brand1 transition-all duration-300 ease-linear px-8 py-1" href={`${link}`} target="_blank">{textButton}</Link>
          </AnimatedTextButton>
        </div>
        <motion.div
          className="w-full top-0 sm:top-auto sm:w-1/2 h-1/2 sm:h-full absolute right-auto sm:right-0"
          initial={{ width: "0%", }}
          animate={{ width: isMobile ? "100%" : isTablet ? "65%" : "50%", }}
          exit={{ transition: { duration: 100 } }}
          transition={{ duration: 1, type: "spring", delay: .2, damping: 15, staggerChildren: 0.5 }}
        >
          <div className="w-full h-96 sm:h-dvh bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }} />
        </motion.div>
      </div>
      {children}
    </section>
  );
};

export default TemplateRoute;
