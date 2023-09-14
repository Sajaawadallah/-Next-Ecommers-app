import styled from "styled-components";



export const SupLayoutBackground = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
padding-top: 18.5rem ;
background-color: ${props => props.theme.colors.sup_layout};

`

export const SupFooter = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
background-color: ${props => props.theme.colors.white} ;
padding: 1.5rem;
margin-top: 21rem;
`

export const SupFooterLinks = styled.div`
display: flex;
gap: 3rem;
align-items: center;

& a {
color: ${props => props.theme.colors.copy_right} ;
transition:  all 0.5s;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: -0.2px;
}
& a:hover {
color: ${props => props.theme.colors.primary} ;

}
`

export const SupFooterWays = styled.div`
display: flex;
gap: 1rem;
align-items: center;

`