'use clint'
import React from 'react'
import Image from 'next/image'
import NavColMenu from '../../molecules/NavColMenu/page'
import SocilIcon from '../../molecules/SocielIcon/page'
import { SupCol, ColordP, BottomFooter, CopyRight, LangSelectMenu } from './style'
import { navlinks } from '../../constant/Footer'
import { Col, Container, Row } from '@/app/styles/globals'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'


const Footer = () => {


    return (

        <>

            <Container>
                <Row>
                    <Col style={{ width: "25%" }}>
                        <Image src='/logo.png' alt='logo' width={140} height={44} />
                        <ColordP>Best information about the company gies here but now lorem ipsum is</ColordP>
                        <SocilIcon />
                    </Col>

                    <Col style={{ width: "75%" }}>
                        <Row style={{ width: "100%" }}>
                            {navlinks.map((navcol) => (
                                <SupCol style={{ gap: "1rem" }} key={navcol.id}><NavColMenu linkslist={navcol.links} navtitle={navcol.title} /></SupCol>
                            ))}
                        </Row>

                    </Col>

                </Row>

            </Container>
            <BottomFooter>
                <Container>
                    <Row>
                        <CopyRight>© 2023 Ecommerce. </CopyRight>
                        <LangSelectMenu>
                            <Image src="/US@2x.png" alt='USA' width={28} height={20} />
                            <CopyRight>English </CopyRight>
                            <MdOutlineKeyboardArrowUp size={20} />
                        </LangSelectMenu>

                    </Row>

                </Container>
            </BottomFooter>

        </>







    )
}

export default Footer
