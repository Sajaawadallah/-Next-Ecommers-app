import { H4 } from "@/components/atoms/Typography/style";
import Link from "next/link";
import styled from "styled-components";


export const ServiceCol = styled.div`
display: flex;
flex-direction: column;
align-items:center ;
justify-content: center;


`;


export const ServiceCard = styled.div`
position: relative;
height: 200px !important;
display: flex;
flex-direction: column;
align-items:flex-start ;
justify-content: center;
overflow: hidden;
${(props) => (
        {
            background: props.theme.colors.white,
            border: `1px solid ${props.theme.colors.card_border}`,

        }
    )};

& > img {
    width : 100%;
    height : auto;
}

`;

export const ServiceIcon = styled.div`
position: absolute;
right: 20px;
top: 45%;
display: flex;
justify-content: center;
align-items:center ;
width: 55px;
height: 55px;
border-radius: 50%;
text-align: center;
${(props) => (
        {
            background: props.theme.colors.light_blue,
            border: `2px solid ${props.theme.colors.white}`,

        }
    )};


`;

export const ServiceTitle = styled(Link)`
font-size: 16px;
font-weight: 500;
color: ${props => props.theme.colors.dark};
width: 70%;
padding: 20px 0 20px 20px ;

`




