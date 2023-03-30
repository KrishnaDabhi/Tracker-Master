import { Stack } from '@mui/material'
import React from 'react'
import Logodesign from '../core/Logodesign'
import Loginform from '../section/auth/loginform'

const style = {
    flexDirection: "row",
    alignItems: "center",
    border: '1px solid #2667FF',
    borderRedius: "2px",
    padding: '1px'

}
function Loginpage() {

    return (
        <>
            <Stack sx={{ height: "100vh", justifyContent: "center", alignItems: 'center' }}>
                <Stack sx={style}>
                    <Stack>
                        <Loginform />
                    </Stack>
                    <Stack sx={{ width: "470px", alignItems: "center", justifyContent: 'center' }}>
                        <Logodesign />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Loginpage