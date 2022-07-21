import {  Box, Button, color,Text } from "@chakra-ui/react";
import Nav from "./nav";








export default function Navbar(){

    return (
   <div>
    <Nav/>
    <Box backgroundColor='#003580'>
        <div style={{display:'flex',width:'78%',margin:'auto',gap:'40px',padding:'8PX'}} >
    
                <Button backgroundColor='#003580' color='white' >Stays</Button>
                <Button backgroundColor='#003580' color='white' >Flights</Button>
                <Button backgroundColor='#003580' color='white' >Flight+Hotel</Button>
                <Button backgroundColor='#003580' color='white' >Car rentals</Button>
                <Button backgroundColor='#003580' color='white' >Attractions</Button>
                <Button backgroundColor='#003580' color='white' >Airport taxis</Button>

        </div>
    </Box>
    <Box backgroundColor={'#003580'}> 
    <br />
    <br />
   
   
    <Box width='75%' margin='auto'>    <Text fontSize='5xl' fontWeight='bold' color='white' >Find your next stay</Text>
    <Text fontSize='2xl' color='white'>Search low prices on hotels, homes and much more...</Text></Box>
    <br />

    </Box>

   </div>

     
    
        
    )
}