import Image from "next/image";
import { GithubIcon, LinkedinIcon, MailboxIcon } from "lucide-react";
import { siteConfig } from "@/site.config";

const Intro = () => {
  return (
    <section className="mt-10 mb-24 px-5  xl:px-0">
      <div className="md:flex items-center gap-10">
        <figure className="my-2 md:m-0 rounded-full overflow-hidden w-[120px] h-[120px] ">
          <Image
            src="/assets/vamsi-profile.png"
            alt={`${siteConfig.name} Profile picture`}
            width={120}
            height={120}
          />
        </figure>
        <div>
          <h1 className="font-bold text-4xl md:text-5xl text-neutral-700">{siteConfig.name}</h1>
          <p className="text-md md:text-lg mt-1">Engineering Leader and Developer based in UAE</p>
        </div>
      </div>
      <div className="text-lg md:text-xl my-8 ">
        <p className="mb-5 leading-normal">I am a software developer and an engineering leader based in UAE. I have more than a decade long experience working mostly with startups and scaling up teams.</p>
        <p className="mb-5 leading-normal"> I have been a founding engineer and have built teams and products from inception to billions in revenue</p>
        <p className="mb-5 leading-normal">Over the years, I have worked with a variety of technologies including Kotlin, TypeScript, Node.js, Go, React, React Native, Android, Swift, MongoDB, PostgreSQL, Redis, AWS, Docker, and many others.</p>
        <p className="mb-5 leading-normal">I have worked in a variety of domains including EdTech, B2B and B2C ecommerce, Finance and Business Management and have worn many different hats. This has given me a broad perspective and a deep understanding of the software development lifecycle.</p>

        <p className="mb-5 leading-normal">I am a polygot developer at heart and expertise in all parts of the stack including the frontend, backend, databases, devops and cloud.</p>

      </div>
       <p className="mt-5 text-lg md:text-xl ">If you want to get in touch, feel free to <a className="underline" href={siteConfig.socialLinks.email}> email</a> me or connect on <a className="underline" href={siteConfig.socialLinks.linkedIn}>LinkedIn</a>.</p>
      <ul className="mt-12 flex items-end list-none gap-4 p-0">
        <li>
          <a
            className="text-md md:text-xl flex items-center md:items-end gap-2 leading-none hover:scale-110 transition-transform"
            href={siteConfig.socialLinks.email}
          >
            <span>
              <MailboxIcon size={24} />
            </span>
            <span className="leading-none">Mail</span>
          </a>
        </li>
        <li>
          <a
            className="text-md md:text-xl flex items-center md:items-end gap-2 hover:scale-110 transition-transform"
            href={siteConfig.socialLinks.linkedIn}
          >
            <span>
              <LinkedinIcon size={22} />
            </span>
            <span className="leading-none">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="text-md md:text-xl flex items-center md:items-end gap-2 hover:scale-110 transition-transform"
            href={siteConfig.socialLinks.github}
          >
            <span>
              <GithubIcon size={20} />
            </span>
            <span className="leading-none">Github</span>
          </a>
        </li>

      </ul>



    </section>
  );
};

export { Intro };
