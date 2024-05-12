import { siteConfig } from "@/site.config";
import { InstagramIcon, LinkedinIcon, MailboxIcon, X } from "lucide-react";

const Footer = () => {
  return (
    <footer>

      <hr className="mt-10 dark:border-slate-500" />
      <div className="justify-between p-5 text-center text-sm md:flex md:px-4 lg:px-0">
        <p className="my-2">
          © 2024 {siteConfig.name}
        </p>
        <p className="my-2 ">
          Designed & built by{" "}
          <a className="hover:underline" href="https://ravigopal.com">
            Ravigopal Kesari
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
