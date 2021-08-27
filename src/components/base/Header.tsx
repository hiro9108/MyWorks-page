import { css, SerializedStyles } from "@emotion/react";
import { motion } from "framer-motion";

const rootStyle: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000000d0;
`;

const titleStyle: SerializedStyles = css`
  color: #ffffffdd;
  font-size: 10rem;
  font-family: "Nanum Pen Script", cursive;
`;

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "Spring", ease: "easeOut", duration: 3 }}
    >
      <div css={rootStyle}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "Spring", ease: "easeOut", duration: 0.25 }}
        >
          <strong css={titleStyle}>MY WORKS</strong>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Header;
