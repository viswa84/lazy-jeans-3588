import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import Nav from "./nav";


export default function Signgn (){

    return (
        <div>
            <Nav/>
              <div  style={{display:'flex' , alignItems:'center',justifyContent:'center' ,marginTop:'100px' }}>
    
                 <Box >
            
            <Box width='23rem'>
                <Text fontSize='2xl' fontWeight={'bold'}   >Sign in or create an account</Text>
                <br />
                <Text fontSize='sm'>Email address</Text>
                <Input   isInvalid
                    errorBorderColor='black'        placeholder='' size='lg' />
             </Box>
             <br />
            
             <Box width='23rem' >

                   <Button width='23rem'height='50px' colorScheme='telegram' >Continue with mail</Button>
             </Box>  
             
             </Box>
             <Box width='23rem'>
       
            </Box>
            <br />
            <Box width='23rem'>
    
    
            </Box>

            </div>
            <div>

            </div>
       
        
        
         
        </div>
    )
}