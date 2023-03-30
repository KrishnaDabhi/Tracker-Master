import { styled, TextField as MuiTextField } from '@mui/material'

const TextField = styled(MuiTextField)(()=>({
  "& .MuiInputBase-formControl ":
  {
    width:350
   }

}))


export default TextField;