import {Box, TextField} from "@mui/material";

const InputField = () => {
    return (
        <TextField
            label={'multiline'}
            variant={"outlined"}
            multiline
            rows={4}
        />
    )
}

export default InputField