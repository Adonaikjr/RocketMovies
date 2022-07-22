import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        margin: 0 auto;
        padding: 0 auto;
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color:${({theme}) => theme.COLORS.WHITE};
      
      
    }
`