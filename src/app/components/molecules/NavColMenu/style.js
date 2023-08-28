import styled from "styled-components";
import { H4, P } from "../../atoms/Typography/style";



export const Navtitle = styled(H4)`
color: ${(props) => (props.theme.colors.dark)};
margin-bottom: 1rem;



`

export const NavMenu = styled.ul`
list-style: none;

`


export const Navlink = styled(P)`
color: ${(props) => (props.theme.colors.gray_link)};
transition: all 0.5s ;
position: relative;
left: 0;
margin-bottom: 8px;
&:hover{
color: ${(props) => (props.theme.colors.primary)};
    left: 5px;
}
`







