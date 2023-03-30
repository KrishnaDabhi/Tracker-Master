
import { CssBaseline } from '@mui/material'
import { createTheme,useTheme ,ThemeProvider as MuiThemeProvider ,StyledEngineProvider } from '@mui/material/styles'
import React from 'react'


const lightThemeColor={
    primary:"#163339",
    secondary:'#2667FF2',
    warning:'#FFC107',
    success:"#54D62C",
    error:"#FF4842",
    backgroud:"#F9FBFD",
    paper:"#FFFFFF"
    
}

const darkThemeColor={
    primary:"#163339",
    secondary:'#CEA254',
    success:"#54D62C",
    error:"#FF4842",
    background:"#1E1F20",
    paper:"#10141F"
}

const themeColor ={
    light:lightThemeColor,
    dark:darkThemeColor
}

function ThemeProvider(){
    const defaultTheme = useTheme()
    const selectedTheme = 'light'

    const theme = createTheme({
        ...defaultTheme,
        shape:{borderRadius:10},
        palette:{
            mode:selectedTheme,
            background:{
                paper:themeColor[selectedTheme].paper,
                default:themeColor[selectedTheme].backgroud,
            },
            primary :{
                main:themeColor[selectedTheme].primary,
            },
            secondary:{
                main:themeColor[selectedTheme].secondary,
            },
            success:{
                main:themeColor[selectedTheme].success,
            },
            warning:{
                main:themeColor[selectedTheme].warning,
            },
            error:{
                main:themeColor[selectedTheme].error,
            },
        },
        typography:{
            fontFamily:'IBM Plex Sans',
        }
    })

  return (
    <>
    <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </MuiThemeProvider>
    </StyledEngineProvider>
    </>
  )
}

export default ThemeProvider;