
import { styled } from "styled-components"
import { P } from "../../atoms/Typography/style"





export const SupCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: start;
gap: 2rem;
width: calc(100% / 5);
`

export const ColordP = styled(P)`
color: ${(props) => (props.theme.colors.gray_p)};
`

export const BottomFooter = styled.div`
${(props) => (
        {
            background: props.theme.colors.light_gray,
            borderTop: `1px solid ${props.theme.colors.border_gray}`,

        }
    )};

padding: 20px;
margin-top : 5rem;


`

export const CopyRight = styled(P)`
color: ${(props) => (props.theme.colors.copy_right)};
font-size: 14px;
`


export const LangSelectMenu = styled.div`

height: 40px;
padding: 0 10px;
display: flex;
align-items: center;
gap: 8px;
cursor: pointer;

`





