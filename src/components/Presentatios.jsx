import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { openInNewTab } from "./WorkTogheter";




const Presentation = () => {
    return(
        <>
            <div className="row w-100 justify-content-center px-md-5 px-3 px-sm-4 flex-md-row flex-column-reverse">
                <div className="col-md-7 col-12 me-md-3 rounded-lg py-4 gradient px-5" style={{backgroundColor: '#F0F0F0'}}>
                    <div className="w-100 mb-5">
                        <h1 className="w-100 text-start fs-5 fs-md-2">Hello, I'm Guilherme Software Engineer and Web Developer</h1>
                    </div>

                    <p className="mb-5 fs-6">I have been developing in different languages ​​and technologies for 3 years, today I have Java as my main language in backend development.</p>

                    <nav className="row mt-5">
                        <div className="col-md-4 col-12 rounded-xlg d-flex justify-content-center align-items-center m-0 p-lg-2 p-md-1 p-2 mb-md-0 mb-3 text-light text-center button-contact" style={{backgroundColor: '#1D1D1D'}} >Contact me</div>

                        <div className="col-md-5 p-0 d-flex justify-content-center align-items-center">
                            <ul className="w-100 m-0 d-flex justify-content-between align-items-center list-unstyled">
                                <li onClick={() => openInNewTab('https://github.com/guilhermeandradee/')} className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3 button-contact"><FaGithub/></li>

                                <li onClick={() => openInNewTab("https://mail.google.com/mail/?view=cm&fs=1&to=gui.andrade1510@gmail.com&su=Assunto&body=Vamos trabalhar juntos?")}
                                
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3 button-contact"><BiLogoGmail/></li>

                                <li onClick={() => openInNewTab('https://www.linkedin.com/in/guilherme-andrade-600842288/')} 
                                
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3 button-contact"><BsLinkedin/></li>

                                <li onClick={() => openInNewTab('https://wa.me/551197233031?text=Olá!+Estou+entrando+em+contato+com+você+para+trabalharmos+juntos!.')}
                                
                                className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3 button-contact"><IoLogoWhatsapp/></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-md-4 col-12 bg-warning rounded-lg image-gui image-gui-md mb-3 mb-md-0 "  >
                
                </div>
            </div>
        </>
    )
}

export default Presentation