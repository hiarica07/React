import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";

const TextFieldComp = () => {
  return (
    <div>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">TEXT_FIELD</Typography>

        <Box sx={{marginTop:4}} >
        {/* margin=danse  = az bir margin verir  */}
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Email Giriniz"
            margin="dense"
          />
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
