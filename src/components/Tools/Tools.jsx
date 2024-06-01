import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./Tools.module.scss";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if the component is in the viewport
    const isInViewport = () => {
      const rect = document.querySelector("." + classes.Tools).getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle animation trigger
    const handleAnimation = () => {
      if (isInViewport()) {
        setIsVisible(true);
      }
    };

    // Attach scroll event listener to trigger animation
    window.addEventListener("scroll", handleAnimation);
    
    // Initial check for animation trigger
    handleAnimation();

    // Cleanup: remove scroll event listener
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <motion.div
      className={classes.Tools}
      style={{ height: "80vh", backgroundColor: "white", width: "100%" }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"} // Conditionally apply animation based on visibility
      transition={{ staggerChildren: 0.3 }}
    >
      <section className="container conv2">
        <motion.aside
          className={classes.text__cont}
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          <h3>Самые мощные и простые в использовании API в мире</h3>
          <h5>Инструменты для каждого стека</h5>
          <p>
            Мы предлагаем клиентские и серверные библиотеки на всех языках - от
            React и PHP до .NET и iOS.
          </p>
          <span>
            <h6>Готовые интеграции</h6>
            <p>
              Используйте интеграцию с такими системами, как Shopify,
              WooCommerce, NetSuite и другими.
            </p>
          </span>
        </motion.aside>
        <motion.div
          className={classes.img__cont}
          variants={imageVariants}
          transition={{ duration: 0.6 }}
        >
          <CodeEditor />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Tools;
