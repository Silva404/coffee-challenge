import { useState } from "react";
import { Tab } from "./components/tab";
import { CoffeesList } from "./components/coffees-list/coffees-list";
import { useRouter } from "next/router";

const tabs = ["All", "Robusta", "Arabic"] as const;

export function Coffes() {
  const router = useRouter();
  const { type } = router.query;
  const [activeTab, setActiveTab] = useState(type ?? "All");

  return (
    <section className="flex items-center flex-col py-8 lg:py-32">
      <h1
        id="coffe-list-heading"
        className="text-3xl leading-5 lg:text-5xl lg:leading-5xl mb-2 lg:mb-12 text-white font-normal font-mono"
      >
        MVST. EXCLUSIVE Coffee
      </h1>
      <div className="flex bg-black-secondary w-fit rounded-full gap-2 mb-7 lg:mb-16">
        {tabs.map((tab) => (
          <Tab
            tab={tab}
            key={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <CoffeesList tab={activeTab!?.toString()} />
    </section>
  );
}
