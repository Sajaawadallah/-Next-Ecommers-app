import { SERVICES } from '@/constant/HomePage'
import { Container, Row } from '@/styles/globals'
import Image from 'next/image'
import React from 'react'
import { ContantBackground, Title } from '../SuppliersByRigen/style'
import { ServiceCard, ServiceCol, ServiceIcon, ServiceTitle } from './style'

const ExtraServices = () => {
    return (
        <ContantBackground>
            <Container>
                <Title>Our Extra Services </Title>
                <Row>


                    {SERVICES.map((service) => (

                        <ServiceCol key={service.id}>
                            <ServiceCard>
                                <Image src={service.imgsrc} width={288} height={192} />
                                <ServiceIcon>{service.icon}</ServiceIcon>
                                <ServiceTitle href={"#"}>{service.servicesname}</ServiceTitle>

                            </ServiceCard>

                        </ServiceCol>
                    ))}

                </Row>

            </Container>
        </ContantBackground>
    )
}

export default ExtraServices
