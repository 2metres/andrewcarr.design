import data from '../data'
import ColorContrastChecker from 'color-contrast-checker'

const ccc = new ColorContrastChecker()

const Projects = () => {
  const {
    projects,
  } = data

  return (
    <div className="">
      {

        projects.map(p => {
          const {
            id,
            background,
            title,
            subtitle,
            description,
            projectLink,
            subProject,
          } = p

          return (
            <section
              key={id}
              className="px-12 py-24"
              style={{
                background,
                color: ccc.isLevelCustom(background, '#FFF', 2) ? '#FFF': '#000',
              }}
            >
              <div className="container mx-auto">
                <h2 className="text-4xl font-display uppercase font-black">{ title }</h2>
                { !!subtitle && <h4 className="text-xl font-display">{ subtitle }</h4> }
                { !!description && <p className="mt-2 text-lg font-body font-light">{ description }</p> }
                {
                  !!projectLink && (
                    <a
                      className="btn btn-blue my-8 font-display"
                      href={projectLink}
                      rel="external"
                      target="_blank"
                    >
                      Project Link
                    </a>
                  )
                }
                {
                  !!subProject && subProject.map(s => (
                    <div key={s.id} className="mb-12">
                      <h4 className="text-2xl font-display">{ s.title }</h4>
                      {!!s.description && <p className="mt-2 text-lg font-body font-light">{s.description}</p>}
                    </div>
                  ))
                }
              </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default Projects