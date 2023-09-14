import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: '#0D6EFD',
        gray_p: '#505050',
        gray_icon: '#BBBCBE',
        dark: '#1C1C1C',
        gray_link: '#8B96A5',
        light_gray: '#EFF2F4',
        border_gray: "#E3E8EE",
        copy_right: "#606060",
        white: "#FFFFFF",
        background: "#F7FAFC",
        light_blue: "#D1E7FF",
        card_border: "#E0E0E0",
        sup_layout: "#F7F7F7",



    }

};


const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);



export default Theme