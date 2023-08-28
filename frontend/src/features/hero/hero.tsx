import Image from "next/image";
import { Dialog, DialogContent } from "@/components/dialog";
import { useEffect, useState } from "react";
import { CreateCoffee } from "../coffe/components/create-coffee/create-coffee";
import { Button } from "@/components/button";

export function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [formIsVisible, setFormIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function closeForm() {
    setFormIsVisible(false);
  }

  function openForm() {
    setFormIsVisible(true);
  }

  return (
    <>
      {isClient && (
        <Dialog open={formIsVisible} onOpenChange={setFormIsVisible}>
          <DialogContent className="rounded">
            <CreateCoffee onSuccess={closeForm} />
          </DialogContent>
        </Dialog>
      )}
      <div
        className="relative bg-[linear-gradient(to_bottom,rgba(16,16,17,0.7),rgba(16,16,17,1)),url('/hero.png')]
  bg-cover bg-center lg:h-screen lg:flex lg:flex-col lg:items-center"
      >
        <div className="flex items-center justify-between p-6 z-10 w-full lg:max-w-7xl">
          <Image height={25} width={166} src="/mvst-logo.svg" alt="MSVT Logo" />
          <Button type="button" className="w-fit" onClick={openForm}>
            Create
          </Button>
        </div>
        <div className="h-full flex items-center w-full justify-center">
          <div className="flex items-center justify-center lg:items-start text-center lg:text-left lg:w-full lg:max-w-7xl flex-col mx-20 my-14 mb-20">
            <h1 className="text-white font-mono font-normal text-6xl leading-[76px] mb-4 lg:mb-3 lg:text-[130px] lg:leading-[130px]">
              ROASTED COFFEE
            </h1>
            <p className="text-gray-quaternary font-normal text-xl mb-8 lg:mb-6 font-sans">
              Choose a coffe from below or create your own.
            </p>
            <Button type="button" onClick={openForm}>
              Create your own coffee
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
