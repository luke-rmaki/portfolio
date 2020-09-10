import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainHeading = styled(motion.h1)`
  font-family: var(--font);
  font-weight: bold;
  font-size: var(--mainheading-size);
  color: var(--main);
  padding: 150px 0 0 25px;
  display: inline-block;
  transform-origin: bottom;
`;

export default MainHeading;
