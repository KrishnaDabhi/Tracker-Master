import { Button as MuiButton, styled } from '@mui/material'
const Button = styled(MuiButton)(()=>({
    textTransform:"capitalize",
    border:"1px solid #536DFE",
    color:"white",
    width:"160px",
    fontWeight:600,
    // padding:"8px",
    fontSize:"16px",
    backgroundColor:"#536DFE",
    borderRadius:'25px',
    marginTop:'20px',

    "&:hover":{
        backgroundColor:'white',
        border:"1px solid #536DFE",
        color:"#536DFE"
    }
}))
export default Button;