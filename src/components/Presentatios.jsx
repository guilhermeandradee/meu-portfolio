import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";




const Presentation = () => {
    return(
        <>
            <div className="row w-100 justify-content-center px-md-5 px-3 px-sm-4 flex-md-row flex-column-reverse">
                <div className="col-md-7 col-12 me-md-3 rounded-lg py-4 gradient px-5" style={{backgroundColor: '#F0F0F0'}}>
                    <div className="w-100 mb-5">
                        <h1 className="w-100 text-start fs-5 fs-md-2">Hello, I’m Guilherme, a Software Engineer in São Paulo.</h1>
                    </div>

                    <p className="mb-5 fs-6">I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>

                    <nav className="row mt-5">
                        <div className="col-md-4 col-12 rounded-xlg d-flex justify-content-center align-items-center m-0 p-lg-2 p-md-1 p-2 mb-md-0 mb-3 text-light text-center" style={{backgroundColor: '#1D1D1D'}} >Contact me</div>

                        <div className="col-md-5 p-0 d-flex justify-content-center align-items-center">
                            <ul className="w-100 m-0 d-flex justify-content-between align-items-center list-unstyled">
                                <li className=""><a className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3" href="" style={{textDecoration: 'none'}}><FaGithub/></a></li>

                                <li className=""><a className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3" href="#" >
                                    <BiLogoGmail />
                                    </a>
                                </li>

                                <li className=""><a className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3" href="" style={{textDecoration: 'none'}}><BsLinkedin/></a></li>

                                <li className=""><a className="d-flex align-items-center justify-content-center bg-white rounded-circle p-3 p-md-2 p-lg-3 ms-md-3" href="" style={{textDecoration: 'none'}}><IoLogoWhatsapp/></a></li>
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