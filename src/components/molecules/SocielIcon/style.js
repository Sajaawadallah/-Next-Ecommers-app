import Link from "next/link";
import { styled } from "styled-components"

export const SocielIcon = styled(Link)`
width: 30px;
height: 30px;
border-radius: 50%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color:  ${(props) => (props.theme.colors.gray_icon)} ;
transition: all 0.5s;

&:hover {
    background-color:  ${(props) => (props.theme.colors.primary)} ;
  
}
`