import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useFollowPointer } from './UseFollowPointer';
export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      className="h-10 w-10 rounded-full bg-gray-300"
      ref={ref}
      style={{ x, y }}
    ></motion.div>
  );
}
