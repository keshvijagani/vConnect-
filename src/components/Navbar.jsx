import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap"; 
import { useNavigate } from "react-router-dom"; 


const  MyNavbar = () => {
    const navigate = useNavigate();


    return(
        <Navbar bg="light" className="shadow-sm navbar w-100 sticky-top" style={{ padding: "5px 15px", height: "50px" }}>
            <Container fluid>

            <div className="d-flex align-items-center">
            <img 
             src="https://th.bing.com/th/id/OIP.LbFEEagss5dxGpPDBy_b9wHaGZ?w=189&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="Logo"
                style={{width: "40px",height: "40px", marginRight: "10px"}}/>
                <div className="fs-4">
               vConnect
               </div>
            </div>

                <Nav className="ms-auto d-flex align-items-center">
             <div className="myAccWrapper">
                <div className="myAcc d-flex align-items-center m-2">
                    <div className="userImg">
                        <span className="rounded-circle">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ&pid=Api&P=0&h=180" 
                                alt="User"
                                style={{width: "30px", height: "30px", borderRadius: "50%"}}
                            />
                        </span>
                    </div>
                </div>
            </div>


          <div className="userInfo ms-auto">
            <h4>welcome, Mr. K P Patel</h4>
          </div>
               </Nav>
            </Container>
        </Navbar>

    )
}

export default MyNavbar;