import "../styles/components/projects.sass";

function Projects () {
    return (
        <div id='portfolio'>
            <div id="projects-container" className="card container-fluid p-5">
                    <h2 className="bg-white text-wrap h2 text-center text-dark rounded-pill justify-content-center p-2 mw-100 mx-auto">
                        <span className="m-1 ">Projects</span>
                    </h2>
                    <div className="card text-bg-dark mx-auto shadow-lg rounded m-5" style={{maxWidth: "18rem"}}>
                        <div className="card-header mb-1">Header Example</div>
                        <div className="card-body">
                            <h5 className="card-title pb-1">Title Example</h5>
                            <p className="card-text pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus porro debitis odit deserunt voluptatem.</p>
                            <span className="badge rounded-pill text-bg-light m-1">Tech 1</span>
                            <span className="badge rounded-pill text-bg-light m-1">Tech n</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;