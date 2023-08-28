import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee } from "../types";

type Props = { coffee: Coffee };

export function CoffeCard({ coffee: coffee }: Props) {
  return (
    <motion.li
      key={coffee.id}
      className="font-sans text-white rounded flex flex-col items-center justify-between relative px-5 pt-12 pb-14 bg-[#191919] h-[472px] hover:ring-2 ring-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      data-testid="coffee"
    >
      <div
        className={`absolute top-6 left-6 z-10 p-2 px-3 rounded-full font-sans font-normal text-base ${
          coffee.type === "Arabic" ? "bg-arabic" : "bg-robusta"
        }`}
      >
        {coffee.type}
      </div>
      <Image
        src={
          coffee.type === "Arabic"
            ? "/arabic-coffee.png"
            : "/robusta-coffee.png"
        }
        height={216}
        width={266}
        alt="Coffe"
        className="mb-16"
      />
      <div className="flex flex-col items-center gap-3 font-sans">
        <h1 className="font-semibold text-2xl text-orange-primary">
          {coffee.name}
        </h1>
        <p className="font-medium text-gray-terciary">{coffee.description}</p>
        <span className="text-white font-bold">{coffee.price}.00 €</span>
      </div>
    </motion.li>
  );
}
