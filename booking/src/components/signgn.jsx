// import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
// import Nav from "./nav";



// export default function Signgn (){

//     return (
//         <div>
//             <Nav/>
//               <div  style={{display:'flex' , alignItems:'center',justifyContent:'center' ,marginTop:'100px' }}>
    
//                  <Box >
            
//             <Box width='23rem'>
//                 <Text fontSize='2xl' fontWeight={'bold'}   >Sign in or create an account</Text>
//                 <br />
//                 <Text fontSize='sm'>Email address</Text>
//                 <Input   isInvalid
//                     errorBorderColor='black'        placeholder='' size='lg' />
//              </Box>
//              <br />
            
//              <Box width='23rem' >

//                    <Button width='23rem'height='50px' colorScheme='telegram' >Continue with mail</Button>
//              </Box>  
             
//              </Box>
//              <Box width='23rem'>
       
//             </Box>
//             <br />
//             <Box width='23rem'>
    
    
//             </Box>

//             </div>
//             <div id="raa">

//             </div>
       
        
        
         
//         </div>
//     )
// }




import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import Nav from "./nav";
import './singn.css'
let initial = {
  email: "",
  password: "",
};
export default function Move() {
  const [state, setState] = useState(initial);
  let praveen = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let ganesh = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div>
        <Nav/>

       
      <div id="move">
        
        <h1>Login</h1>
        <p>Welcome Back</p>
        <a href="https:www.facebook.com">
          <Button size="lg" id="sw" colorScheme="facebook" color="white">
            Login With Facebook
          </Button>
        </a>
        <p>or</p>
      </div>
      <form onSubmit={ganesh}>
        <div id="inin">
          <div>
            <div>
              <h3>E-Mail</h3>
            </div>
            <Input
              size="lg"
              id="inone"
              type="email"
              border="2px solid black"
              value={state.email}
              placeholder="Enter-Email"
              name="email"
              onChange={praveen}
              htmlSize={10}
              variant="outline"
              focusBorderColor="pink.400"
            />
          </div>
          <br />
          <div id="ram">
            <p>Password</p>
            <Input
            ml={'28.4%'}
              id="intwo"
              size="lg"
              type="password"
              border="2px solid black"
              value={state.password}
              placeholder="Enter-Password"
              name="password"
              onChange={praveen}
              htmlSize={10}
              variant="outline"
              focusBorderColor="pink.400"
            />
          </div>
        </div>
        <br />
        <Input
      left={'8.3%'}
          size="lg"
          type="submit"
          id="button"
          backgroundColor="black"
          color="white"
          value="Login"
        />
      </form>
    </div>
  );
}