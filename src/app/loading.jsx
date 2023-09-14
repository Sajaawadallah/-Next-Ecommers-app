'use client'
import Image from "next/image";
import styled from "styled-components"


const StyledLoading = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 10;
background-color: #fff;
display:flex ;
justify-content: center;
align-items: center;

& > img {

    transform: scale(0.5);
    animation: example 1s infinite;

}


@keyframes example {
  from { transform: scale(0.5);}
  to {  transform: scale(1.5)}
}

    
`;
export default function Loading() {
    return <StyledLoading><Image src="/logo.png" width={150} height={46} /></StyledLoading>
}