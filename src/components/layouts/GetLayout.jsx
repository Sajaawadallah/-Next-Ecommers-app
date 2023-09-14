'use client'
import { usePathname } from 'next/navigation';
import MainLayout from './MainLayout';
import SupLayout from './SupLayout';

function getLayout(page, pathname) {


    if (pathname === '/') {
        return <SupLayout>{page}</SupLayout>;
    }

    return <MainLayout>{page}</MainLayout>;
}




import React from 'react'

const GetLayout = ({ children }) => {
    const pathname = usePathname();
    console.log(pathname)

    return (
        getLayout(children, pathname)
    )
}

export default GetLayout
