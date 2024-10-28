import { FaGithub } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const WorkTogether = () => {
    return(
        <>
            <section className="row d-flex justify-content-center w-100 px-3 px-md-0 mt-1">
                <div className="col-md-10 col-12 me-md-3 rounded-lg py-4 gradient px-5" style={{backgroundColor: '#F0F0F0'}}>
                    <div className="w-100 mb-5">
                        <h1 className="w-100 text-start fs-2 fs-md-2">Quer trabalhar comigo?</h1>
                    </div>

                    <p className="mb-5 fs-6">Sinta-se à vontade para entrar em contato para colaborações ou apenas um olá.</p>

                    <p>gui.andrade1510@gmail.com</p>

                    <nav className="row mt-5">
                        <div className="col-md-4 col-12 rounded-xlg d-flex justify-content-center align-items-center m-0 p-lg-2 p-md-1 p-2 mb-md-0 mb-3 text-light text-center" style={{backgroundColor: '#1D1D1D'}} >Contact me</div>

                        <div className="col-md-5 p-0 d-flex justify-content-center align-items-center">
                            <ul className="w-100 w-lg-80 m-0 d-flex justify-content-between align-items-center list-unstyled">
                                <li className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3"><FaGithub/></li>

                                <li className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3"><SiInstagram/></li>

                                <li className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3"><BsLinkedin/></li>

                                <li className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3"><IoLogoWhatsapp/></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default WorkTogether