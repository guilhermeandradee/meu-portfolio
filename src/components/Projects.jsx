import { useRef } from "react";
import { openInNewTab } from "./WorkTogheter";


const Projects = () => {

    return(
        <>
            <section className="font-ralewey row d-flex justify-content-center w-100 px-3 px-md-0 mt-3">
                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/Cougar')} className="col-md-5 col-12 me-md-3 rounded-lg image-cougar px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar ">
                        <h2 className="fw-bold">Cougar</h2>

                        {/* <p className="mt-3">A powerful webservice created for support and helpdesk analysts that uses generative AI (OpenAI integration) and the powerful TF-IDF algorithm to automate the search for solutions to company problems. </p> */}

                        <p className="mt-3 ">Um poderoso webapp desenvolvido para aumentar o desempenho dos analistas de suporte. <br /><br /> A aplicação utiliza integração com IA que atua junto ao algoritmo TF-IDF e possibilita o usuário fazer uma pergunta e ter o retorno de 3 possíveis soluções de dentro da base de dados.</p> <br />
                        Também é possível adicionar dados (problemas e soluções) em uma tabela excel e passar para o sistema. Além é claro, da adição e remoção manual de cada tópico.
                    </div>
                </div>

                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/future-bank')} className="col-md-5 col-12 rounded-lg image-future-bank px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar">
                        <h2 className="fw-bold">Future Bank</h2>

                        <p>
                            Nesse projeto desenvolvi um banco virtual que possibilita saque, depósito e transações entre as contas criadas no sistema. A aplicação utiliza JWT que permite um sistema de autenticação seguro onda cada usuário transaciona somente a sua própria conta. <br /> <br />
                            O FutureBank foi construído em arquitetura de micro serviços e possui um sistema de mensageria que envia um email através do RabbitMQ aos novos usuários cadastrados.
                        </p>
                    </div>
                </div>

                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/Cougar')} className="col-md-5 col-12 me-md-3 rounded-lg image-livechat px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar ">
                        <h2 className="fw-bold">Livechat</h2>

                        <p className="mt-3">Desenvolvi um chat que permite bate papo ao vivo entre um grupo de pessoas. Utiliza Websockets e criptografia de dados para uma comunicação rápida e segura.  </p>
                    </div>
                </div>

                <div onClick={() => openInNewTab('https://github.com/guilhermeandradee/future-bank')} className="col-md-5 col-12 rounded-lg image-comingsoon px-5 mb-3 preencher-div" >
                    <div className="elemento-de-dentro w-100  p-4 bg-cougar ">
                        <h2 className="fw-bold m-0">Vem aí...</h2>

                        {/* <p className="mt-3">A virtual bank simulation built in Java with miroservices architecture, uses JsonWebToken for authentication, stores information such as email, social security number, password and account balance. When registering for the first time, the user receives a welcome email. <br /> <br />* As it is a free hosting service, the application can take up to 3 minutes to generate requests</p> */}
                        
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