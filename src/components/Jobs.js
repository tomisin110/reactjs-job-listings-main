import { useState } from "react"
import data from "../data/data.json"

export default function Jobs() {
  // eslint-disable-next-line
  const [jobs, setJobs] = useState(data)

  return (
    <>
      <section className="px-5 py-10 sm:p-10 grid grid-cols-1 gap-10 lg:max-w-4xl lg:mx-auto">
        {jobs.map(
          ({
            id,
            company,
            logo,
            featured,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools,
          }) => (
            <article key={id} className="bg-white pb-5 px-5 rounded-lg shadow">
              <div>
                <img
                  src={logo}
                  alt={company}
                  title={company}
                  className="w-12 -mt-5"
                />
              </div>

              <div className="flex items-center mb-2">
                <h4 className="mr-3">{company}</h4>
                <aside>
                  {/* <p>{new}</p> */}
                  <p className="featured">{featured ? "Featured" : null}</p>
                </aside>
              </div>

              <div>
                <h3>{position}</h3>
              </div>

              <div className="posted__at flex items-center justify-start mt-3 border-b border-gray-400 pb-3">
                <p className="mr-2">{postedAt}</p>
                <p className="mr-2">{contract}</p>
                <p>{location}</p>
              </div>

              <div className="roles flex flex-wrap items-center justify-between pt-3">
                <p>{role}</p>
                <p>{level}</p>
                {/* Languages */}
                {languages.map((language, index) => (
                  <p key={index}>{language}</p>
                ))}
                {/* Tools */}
                {tools.map((tool, index) => (
                  <p key={index}>{tool}</p>
                ))}
              </div>
            </article>
          )
        )}
      </section>
    </>
  )
}
