import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import { SubHeading } from '..';
import { createHomeMenuAnimation } from '../../utils';

interface Props {
  children: string;
  href: string;
}

export const HomeLink = (props: Props) => {
  const { children, href }: Props = props;
  const [initial, animate, delay] = createHomeMenuAnimation(children);

  return (
    <motion.div
      animate={animate}
      initial={initial}
      transition={{ delay, duration: 0.5 }}
      style={{ transformOrigin: `top` }}
    >
      <SubHeading color="white">
        <Link to={href}>{children}</Link>
      </SubHeading>
    </motion.div>
  );
};
