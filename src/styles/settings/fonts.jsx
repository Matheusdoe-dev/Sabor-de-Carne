import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* latin-ext */
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v20/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDTbtXK-F2qC0usEw.woff) format('woff');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v20/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDYbtXK-F2qC0usEw.woff) format('woff');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v20/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDZbtXK-F2qC0usEw.woff) format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v20/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDXbtXK-F2qC0s.woff) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    
    :root {
        --font-primary: 'Playfair Display', Georgia, serif;
        --font-secondary: Lato, Helvetica, Arial, sans-serif;
    }
`;

export default GlobalStyle;
