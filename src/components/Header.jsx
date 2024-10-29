import { useRef } from "react";

const Header = () => {

    return(
        <>
            <header className="row w-100 m-0 py-3 px-5">
                <div className="col">
                    <p className="m-0">logo</p>
                </div>

                <div className="col-8 justify-content-center align-items-center">
                    <ul className="d-flex flex-wrap justify-content-end align-items-center list-unstyled m-0 w-100" >
                        <li  className="ms-5">Home</li>
                        <li className="ms-5">Projects</li>
                        <li className="ms-5">Contact</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header