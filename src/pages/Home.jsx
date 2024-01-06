import { useState } from "react";
import LoginModal from "../components/LoginModal/LoginModal";
import Navbar from "../components/Navbar/Navbar";
import SignupModal from "../components/SignupModal/SignupModal";

const Home = () =>{
    // Login Modal State Management
    const[loginModalVisible, setLoginModalVisible] = useState(false);
    const openLoginModal = () => {
        setLoginModalVisible(true);
    }
    const closeLoginModal = () =>{
        setLoginModalVisible(false);
    }
    // Signup Modal State Management
    const[signupModalVisible, setSignupModalVisible] = useState(false);
    const openSignupModal = () => {
        setSignupModalVisible(true);
    }
    const closeSignupModal = () =>{
        setSignupModalVisible(false);
    }
    return(
        <>
            <Navbar onLoginClick={openLoginModal} onSignupClick={openSignupModal}/>
            <LoginModal loginModalVisibleValue={loginModalVisible} onCloseClick={closeLoginModal}/>
            <SignupModal signupModalVisibleValue={signupModalVisible} onCloseClick={closeSignupModal}/>
        </>
    )
}
export default Home;