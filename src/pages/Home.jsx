import { useState } from "react";
import LoginModal from "../components/LoginModal/LoginModal";
import Navbar from "../components/Navbar/Navbar";

const Home = () =>{
    const[modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () =>{
        setModalVisible(false);
    }
    return(
        <>
            <Navbar onLoginClick={openModal}/>
            <LoginModal modalVisibleValue={modalVisible} onCloseClick={closeModal}/>
        </>
    )
}
export default Home;