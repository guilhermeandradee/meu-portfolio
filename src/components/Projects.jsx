import { useRef } from "react";
import { openInNewTab } from "./WorkTogheter";


const Projects = () => {

    return(
        <>
            <section className="row d-flex justify-content-center w-100 px-3 px-md-0 mt-3">
                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/Cougar')} className="col-md-5 col-12 me-md-3 rounded-lg image-cougar px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar text-light">
                        <h2 className="">Cougar</h2>

                        <p className="mt-3">Um poderoso webservice criado para analistas de suporte e helpdesk que utiliza IA generativa (integração OpenAI) e o poderoso algoritmo TF-IDF para automatizar a busca por soluções de problemas da empresa. </p>
                    </div>
                </div>

                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/future-bank')} className="col-md-5 col-12 rounded-lg image-future-bank px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar text-light">
                        <h2 className="">Future Bank</h2>

                        <p className="mt-3">Uma simulação de banco virtual construído em Java com arquitetura de miroservices, utiliza JsonWebToken para authenticação, armazena informações como email, cpf, senha e saldo em conta. Ao se cadastrar pela primeira vez o usuário recebe um email de boas vindas. <br /> <br />* Por se tratar de um serviço de hospedagem gratuito, a aplicação pode demorar até 3 minutos para gerar requisições</p>
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