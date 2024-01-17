import {Box, TextField, useTheme, createTheme} from "@mui/material";


const InputField = () => {
    return (
        <TextField
            label={'multiline'}
            variant={"outlined"}
            multiline
            rows={4}
            style={{ backgroundColor: 'rgba(88,87,87,0.84)', }}
            sx={{ color: 'rgb(253,213,0)', }}
        />
    )
}

export default InputField