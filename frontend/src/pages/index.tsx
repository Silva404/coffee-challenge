import { Coffes } from "@/features/coffe/coffees";
import { Hero } from "@/features/hero";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Coffes />
      <div className="w-full mt-10">
        <img
          srcSet="/footer-image-mobile.png 400w, /footer-image-desktop.png 800w"
          sizes="(max-width: 600px) 400px, 800px"
          src="/footer-image-mobile.png"
          className="w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
