import { BadgeCheckIcon, BriefcaseIcon, Contact, HomeIcon, User } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/site.config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center bg-white  px-5 py-5 transition-all dark:bg-slate-800 md:mt-5 xl:px-0">
 <a
          href="/"
          className="flex items-end justify-end gap-2 rounded-lg p-2 "
        >
          <HomeIcon size={24} />
          {/* <span className="text-md">V</span> */}
        </a>
      <div className="ml-auto flex gap-4">
        <a
          href="/work"
          className="flex items-end justify-end gap-2 rounded-lg p-2 "
        >
          <BriefcaseIcon size={24} />
          <span className="text-md">Work</span>
        </a>


        <ThemeToggle />
      </div>
    </header>
  );
};

export { Header };
