import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cl from "./HowItWorks.module.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section 
      ref={ref}
      className={cl.howitworks}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={cl.container}>
        <h2>Как это работает?</h2>
        <p className={cl.p}>
          С нашей интуитивно понятной системой вы можете легко интегрировать онлайн-платежи на ваш сайт всего в три простых шага.
        </p>
        <div className={cl.steps}>
          <motion.div className={cl.step} variants={stepVariants}>
            <div className={cl.stepnumber} style={{ backgroundColor: '#ff6b6b' }}>1</div>
            <h3>Зарегистрируйтесь</h3>
            <p>Пройдите быструю и простую регистрацию на нашей платформе.</p>
          </motion.div>
          <motion.div className={cl.step} variants={stepVariants}>
            <div className={cl.stepnumber} style={{ backgroundColor: '#4caf50' }}>2</div>
            <h3>Настройте параметры</h3>
            <p>Настройте платежные параметры в соответствии с потребностями.</p>
          </motion.div>
          <motion.div className={cl.step} variants={stepVariants}>
            <div className={cl.stepnumber} style={{ backgroundColor: '#3f51b5' }}>3</div>
            <h3>Начните пользоваться!</h3>
            <p>Запустите ваш сайт и начните принимать платежи от клиентов.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
