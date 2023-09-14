import React from 'react'
import { ContantBackground, Supplier, SupplierContray, SupplierInfo, SupplierWebsiteLink, Title } from './style'
import { Container, Row } from '@/styles/globals'

import { SUPPLIERS } from '../../../constant/HomePage'
import Image from 'next/image'

const SuppliersByRigen = () => {
    return (

        <ContantBackground>
            <Container>
                <Title>Suppliers by region </Title>
                <Row style={{ gap: "5.5rem" }}>
                    {SUPPLIERS.map((supplier) => (
                        <Supplier key={supplier.id}>
                            <Image src={supplier.flagimg} width={28} height={20} />
                            <SupplierInfo>
                                <SupplierContray>{supplier.cantruy}</SupplierContray>
                                <SupplierWebsiteLink href={supplier.website}>{supplier.website}</SupplierWebsiteLink>
                            </SupplierInfo>
                        </Supplier>
                    ))}

                </Row>

            </Container>
        </ContantBackground >

    )
}

export default SuppliersByRigen
