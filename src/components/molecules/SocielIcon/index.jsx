import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SocielIcon } from './style'
import { Row } from '@/styles/globals'


const SocilIcon = () => {

    const icons = [
        <SocielIcon key={1} href={"#"}>
            <FaFacebook />
        </SocielIcon>,
        <SocielIcon key={2} href={"#"}>
            <FaTwitter />
        </SocielIcon>,
        <SocielIcon key={3} href={"#"}>
            <FaLinkedin />
        </SocielIcon>,
        <SocielIcon key={4} href={"#"}>
            <FaInstagram />
        </SocielIcon>,
        <SocielIcon key={5} href={"#"}>
            <FaYoutube />
        </SocielIcon>,


    ]
    return (
        <Row style={{ gap: "1rem" }}>{icons.map((item) => item)}</Row>
    )
}

export default SocilIcon
