import { motion } from "framer-motion";

type Props = {
  tab: string;
  isActive: boolean;
  onClick: () => void;
};

export function Tab(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.isActive && "hover:text-white/60"
      } relative rounded-full px-8 py-4 lg:px-16 lg:py-3 text-base font-sans font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
    >
      {props.isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        />
      )}
      {props.tab}
    </button>
  );
}
