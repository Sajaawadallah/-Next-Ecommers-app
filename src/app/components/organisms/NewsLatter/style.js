import { styled } from "styled-components";
import { H3, P } from "../../atoms/Typography/style";
import Input from "../../atoms/Input/page";

export const GrayBckground = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
background-color: ${props => props.theme.colors.light_gray};
margin-bottom: 5rem;
padding: 3rem 0;

`
export const NewsLatterTitle = styled(H3)`
color: ${props => props.theme.colors.dark};
margin-bottom: 3px;

`
export const NewsLatterP = styled(P)`
color: ${props => props.theme.colors.copy_right};

`

export const LatterForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-top: 3rem;
position: relative;

& input {
width: 274px;
height: 50px;
background-color:${props => props.theme.colors.white} ;
border: 1px solid ${props => props.theme.colors.border_gray};
padding-left: 35px;
border-radius: 6px;

}

& input:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
}
& input::placeholder {
    color: ${props => props.theme.colors.gray_link};
    font-size: 15px;
    font-weight: 300;
    

}
& svg {
    position: absolute;
bottom: 17px;
    left: 10px;
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.gray_link};
    margin-bottom: 0;
}

& button {
    width: 130px;
    height: 50px;
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s;

}

& button:hover {
    background: linear-gradient(180deg, #0067FF 0%, #127FFF 100%);
   
}

`