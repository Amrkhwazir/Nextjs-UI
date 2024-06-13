import { FormControl } from '@mui/base'
import { Box, Button, Container} from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <Container>
        <Box sx={{marginTop: "30px"}}>
            <h1>Settings</h1>
        </Box>
        <Box sx={{marginTop: "30px"}}>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Name" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Username" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Email" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Password" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}} type='password'  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} type='password' placeholder="Confirm Password" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Phone" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="City" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Country" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Employee ID" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Emergency Contact Name" />
        </FormControl>
        <FormControl style={{ border: "1px solid black", padding: "8px", borderRadius: "20px", width: "300px", marginTop: "10px"}}  defaultValue="" required >
    <input style={{backgroundColor: "transparent", border: "none", paddingLeft: "5px"}} placeholder="Emergency Phone" />
        </FormControl>
        </Box>
        <Box sx={{marginTop: "10px", paddingTop: "20px"}}>
          <Button sx={{borderRadius: "15px", paddingLeft: "20px", paddingRight: "20px"}} variant='contained'>Save Details</Button>
        </Box>
    </Container>
  )
} 

export default Form
