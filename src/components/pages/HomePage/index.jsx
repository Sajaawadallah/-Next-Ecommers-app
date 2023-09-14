"use client"
import ExtraServices from '@/components/organisms/ExtraServices'
import React from 'react'
import NewsLatter from '../../organisms/NewsLatter'
import SuppliersByRigen from '../../organisms/SuppliersByRigen'

const HomePage = () => {
    return (
        <div>
            <ExtraServices />
            <SuppliersByRigen />
            <NewsLatter />
        </div>
    )
}

export default HomePage
