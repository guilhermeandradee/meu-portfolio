import { useRef } from "react";
import { openInNewTab } from "./WorkTogheter";


const Projects = () => {

    return(
        <>
            <section className="row d-flex justify-content-center w-100 px-3 px-md-0 mt-3">
                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/Cougar')} className="col-md-5 col-12 me-md-3 rounded-lg image-cougar px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar text-light">
                        <h2 className="">Cougar</h2>

                        <p className="mt-3">A powerful webservice created for support and helpdesk analysts that uses generative AI (OpenAI integration) and the powerful TF-IDF algorithm to automate the search for solutions to company problems. </p>
                    </div>
                </div>

                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/future-bank')} className="col-md-5 col-12 rounded-lg image-future-bank px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar text-light">
                        <h2 className="">Future Bank</h2>

                        <p className="mt-3">A virtual bank simulation built in Java with miroservices architecture, uses JsonWebToken for authentication, stores information such as email, social security number, password and account balance. When registering for the first time, the user receives a welcome email. <br /> <br />* As it is a free hosting service, the application can take up to 3 minutes to generate requests</p>
                    </div>
                </div>

                {/* <div className="col-md-5 col-12 me-md-3 rounded-lg image-cougar px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar text-light">
                        <h2 className="">Cougar</h2>

                        <p className="mt-3">Um poderoso website criado para analistas de suporte e helpdesk que utiliza IA e o poderoso algoritmo TF-IDF para automatizar a busca por soluções de problemas da empresa.</p>
                    </div>
                </div>
                
                <div className="col-md-5 col-12 rounded-lg image-cougar px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar text-light">
                        <h2 className="">Cougar</h2>

                        <p className="mt-3">Um poderoso website criado para analistas de suporte e helpdesk que utiliza IA e o poderoso algoritmo TF-IDF para automatizar a busca por soluções de problemas da empresa.</p>
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default Projects