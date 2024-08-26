import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButtons = () => {
  return (
  <div>

    <Container>
    {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
      <Typography variant='h1' component="h3" gutterBottom align="center" color="error" sx={{background:"#eee", mt:4, border:"1px solid red"}} >Typography Container Box Button 
      </Typography>
      <Typography variant="button" >
        span olacak Lorem, ipsum.
      </Typography>

      <Typography variant="body1" >
      p etiketi Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos quasi provident voluptatem animi repudiandae facilis veritatis pariatur inventore est sapiente ipsa praesentium in incidunt, ducimus quas iusto sunt a!
      </Typography>

      <Typography variant="body2" >
      p etiketi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consequatur placeat, iure nemo aliquam minus ad ratione delectus culpa voluptatum cumque modi atque corporis deleniti voluptatibus libero assumenda laboriosam dicta.
      </Typography>

    </Container>

    <Box>
      <Button  sx={{display:'flex',flexDirection:"column",marginTop:4,gap:2}} variant="outlined" color="error" startIcon={<DeleteIcon/>} >DELETE</Button>
      <Button  sx={{color:"blue"}}  variant="contained" color="success" endIcon={<SendIcon/>}  >SEND</Button>
    </Box>

  </div>
  )
}

export default TypoButtons