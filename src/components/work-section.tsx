import { siteConfig } from "@/site.config"

export const WorkSection = () => {
  return (
    <section id="work" className="my-20 px-5 md:px-0">
      <h2 className="font-bold text-4xl text-neutral-700 dark:text-neutral-50">Work</h2>
      <p className="text-lg md:text-xl mt-2 mb-8">I have been fortunate to work with some amazing teams. I have worked mostly with startups but also with some large enterprises. Here is a brief overview of my employment history.</p>

      {siteConfig.workDetails.map((workItem, idx) => (<div key={idx} className="shadow bg-white border-neutral-100 dark:border-neutral-700 border-2 rounded p-4 my-4 dark:bg-[#1e293b30]">
        <div className="flex items-center justify-between">
          <p>{ workItem.location}</p>
          <p>{ workItem.timePeriod}</p>
        </div>
        <h3 className="text-2xl my-2 font-bold text-neutral-700 dark:text-neutral-50">{workItem.role} <span className="font-normal">at</span> { workItem.companyName}</h3>

        <div>
              <p className="text-lg mb-2">{workItem.companyInfo}  </p>
          <p className="text-lg">{ workItem.workDesc}</p>
        </div>
        <ul className="list-none flex flex-wrap items-center gap-2 my-4">
          {workItem.skills.map((skill, idx) => <li key={ idx} className="px-2 py-1 border-neutral-300 border-2 rounded-full">{ skill}</li>)}

        </ul>
      </div>))}

      <a className="inline-block bg-neutral-700 my-4 dark:bg-neutral-100 dark:text-neutral-700 text-white text-lg px-3 py-2 font-bold hover:scale-110 transition-transform" href="/vamsi-resume.pdf">Download CV</a>

  </section>)
}