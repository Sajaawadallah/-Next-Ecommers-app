import Link from "next/link";
import { styled } from "styled-components";
import { H2, H4 } from "../../atoms/Typography/style";




export const ContantBackground = styled.div`    
    background-color: ${props => props.theme.colors.background};
    padding: 3rem 0;
    
`;

export const Title = styled(H2)`
color: ${props => props.theme.colors.dark};
padding-bottom: 3rem;
`;


export const Supplier = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items:center ;
    justify-content: center;
  
    
`;


export const SupplierInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const SupplierWebsiteLink = styled(Link)`
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: ${props => props.theme.colors.gray_link};
transition: all 0.5s;
 
&:hover{
    color: ${props => props.theme.colors.dark};
}

`

export const SupplierContray = styled(H4)`
font-size: 16px;
font-weight: 400;
 color: ${props => props.theme.colors.dark};
`





