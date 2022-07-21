import { Button, Text } from "@chakra-ui/react";



export default function Nav(){

    return(
        <div>
               <div  id="vis" style={{backgroundColor:'#003580'}}>
           <div style={{display:'flex' ,justifyContent:'space-between',width:'75%',margin:'auto',paddingTop:'10px'}} >
            <div style={{marginTop:'10px',fontSize:'25px',fontWeight:'bold', color:'white'}}>Booking.com</div>
            <div  style={{display:'flex',gap:'25px', justifyContent:'center',alignItems:'center',padding:'1rem'}} >
            <Text fontSize='xl' color={'white'}>INR</Text>
                <img style={{borderRadius:'50%' ,height:'20px'}}   src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png" alt="INDIA" />
    
               <Button colorScheme='#003580' border={'1px solid white'}  size='sm'  >List Your property</Button>
               <Button size='sm' >Register</Button>
               <Button  size='sm' >Singn in</Button>
               
            </div>
          </div>
     </div>
            
            
        </div>
 
    )
}