import {  Avatar, Box, Button, color,Text,Image, Input, Checkbox, Flex } from "@chakra-ui/react";
import Nav from "./nav";


import '../components/Home.css'


let data=[
    {
        avatar:'https://cf.bstatic.com/xdata/images/city/square250/684572.webp?k=f74af2be72834d9953c8096834db666c7769c5f6c1ba230d6fe5591ba84dd33d&o=',
        city:'Cochin',
        prop:'963 properties'
    },
    {
        avatar:'https://cf.bstatic.com/xdata/images/city/square250/684720.webp?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o=',
        city:'Munnar',
        prop:'515 properties'
    },
     {
        avatar:'https://cf.bstatic.com/xdata/images/city/square250/684514.webp?k=94a24874ade1e734dd61fa72b85a246a86a682b1e6e8a0e257cf82ad151ed1f0&o=',
        city:'Allepelly',
        prop:'468 properties'
    },
     {
        avatar:'https://cf.bstatic.com/xdata/images/city/square250/665317.webp?k=99612c09c04ec888a2010f455a997210e03260104df3ad4ccd1291c6317466fb&o=',
        city:'Kumarakom',
        prop:'61 properties'
    },
    {
        avatar:'https://cf.bstatic.com/xdata/images/region/square250/64047.webp?k=69ed31a11668d879f62b1e931c2f00529d6255a5071af0cd7501c92597aabf68&o=',
        city:'Wanyned',
        prop:'710 properties'
    },
    {
        avatar:'https://cf.bstatic.com/xdata/images/city/square250/909116.webp?k=2238c4373299fc44987d5bcbaf22e1531bf66ec22026cc7582b3c77b43ffe8d4&o=',
        city:'Vagamon',
        prop:'131 properties'
    },
    
]
let data1 =[
    {
        avatar:'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
        city:'Hotels',
        prop:'876,964 hotels'
    },
    {
        avatar:'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',
        city:'Apartments',
        prop:'906,909 apartments'
    },
    {
        avatar:'https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
        city:'Resorts',
        prop:'17,968 resorts'
    },
    {
        avatar:'https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
        city:'Villas',
        prop:'472,436 villas'
    },
];
let citydata =[
    {
        city:'Biher',
        prp:'761 Properties'
    },
    {
        city:'Hawai',
        prp:'5,515 Properties'
    },
    {
        city:'Bora Bora',
        prp:'59 Properties'
    },
    {
        city:'Texel',
        prp:'411 Properties'
    },
    {
        city:'Zanzibar',
        prp:'845 Properties'
    },
    {
        city:'Jersey ',
        prp:'89 properties'
    },
    {
        city:'MYkonos ',
        prp:'89 properties'
    },
    {
        city:'Bali ',
        prp:'12,687 properties'
    },
    {
        city:' Guernsey',
        prp:'61 properties'
    },
    {
        city:'Santorini ',
        prp:'1,762 properties'
    },
    {
        city:' lsle of Wight',
        prp:'934 properties'
    },
    {
        city:'Lake District ',
        prp:'2,403 properties'
    },
    {
        city:' ibixa',
        prp:'1,640 properties'
    },
    {
        city:'Ras Al KHaimah ',
        prp:'113 properties'
    },
    {
        city:'Phket province ',
        prp:' 5,495 properties'
    },
    {
        city:'England ',
        prp:' 73,973 properties'
    },
    {
        city:'Tenerife ',
        prp:' 9,605 properties'
    },

    
 

]



export default function Navbar(){

    return (
   <div style={{}} >
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
    <Box width='78%' margin='auto'  >
        <Box>
            <br />
            <Box padding='10px'>        
              <Text fontSize='3xl' fontWeight='bold' >Offers </Text>
            <Text fontSize='initial'  fontWeight='400'  color='gray' >Promotions, deals and special offers for you</Text></Box>
             <Box boxShadow={' rgba(0, 0, 0, 0.24) 0px 3px 8px'} paddingTop='7px' paddingBottom='7px' borderRadius={'10px'}  display='flex' >
                <Box  padding='10px'  > <img height='150px' width='150px'  src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg" alt="viswa" /></Box>

                <Box  display='flex' flexDirection={'row'}  alignItems='center' justifyContent='center' >
                       <Box gap='20px' padding='10px'>     
                           <Text fontWeight='bold' >Save 15% or more</Text>
                   
                   <Text  >This summer, make your dream trip a reality. Book and stay for less before 30 Sep 2022</Text>
                   <br />
                   <Button   colorScheme='messenger'>Explore deals</Button>
                   </Box>
    
                </Box>
             </Box>
        </Box>
    </Box>
    <div id="viswa">
      {/* <Text fontWeight='bold'>Explore India</Text>
      <Text>These popular destinations have a lot to offer</Text> */}

      <br />
      <br />
        
         <Box width='78%' gap={'20px'} id="ram" margin='auto'>
            {data.map((e)=>(
                <div >
                    <Image boxSize='180px'   id="ija" src={e.avatar} alt="viswa" />
                    
                    <Text marginTop={'20px'} fontWeight='bold'>{e.city}</Text>
                    <Text fontSize='sm' color={'gray'}>{e.prop}</Text>
                </div>
            ))}

         </Box>


         <br />
         
          <Box width={'78%'} margin='auto'> 


         <Text fontSize='2xl' marginBottom={'20px'}  fontWeight='bold'>Browse by property type</Text>
          
          </Box>

         <Box width='78%' gap={'50px'} id="ram" margin='auto'>
            {data1.map((e)=>(
                <div >
                    <Image height={'213px'} width='263px'  id="ija" src={e.avatar} alt="viswa" />
                    
                    <Text marginTop={'20px'} fontWeight='bold'>{e.city}</Text>
                    <Text fontSize='sm' color={'gray'}>{e.prop}</Text>
                </div>
            ))}

         </Box>
         <br />
         <br />
       <Box width='78%' gap={'20px'} id="ram" margin='auto' >
       
  <div class="container">
  <Image width='600px' height='270px' src="https://images.unsplash.com/photo-1626065659388-0603c209f0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoZW5uYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
  
  <div class="top-left"><Text fontSize='2xl' fontWeight='bold'  >Chennai <img display={'block'}    src="https://media.istockphoto.com/photos/indian-flag-picture-id177387875?b=1&k=20&m=177387875&s=170667a&w=0&h=K7FtMorv89_SAAFLwhLdlVg8WDklStnozUvmBXqiS3I=" alt="INDIA" />   </Text>   
  <Text fontSize='sm' >1408 propartes</Text>
  </div>
  
           </div>
           <div class="container">
  <Image width='600px' height='270px' src="https://images.unsplash.com/photo-1573143950521-36ef5345dae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG11bWJhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
  
  <div class="top-left"><Text fontSize='2xl' fontWeight='bold'  >Mumbai<img display={'block'}    src="https://media.istockphoto.com/photos/indian-flag-picture-id177387875?b=1&k=20&m=177387875&s=170667a&w=0&h=K7FtMorv89_SAAFLwhLdlVg8WDklStnozUvmBXqiS3I=" alt="INDIA" />   </Text>   
  <Text fontSize='sm' >1651 propartes</Text>
  </div>
  
           </div>
       </Box>
       <br />
       <Box width='78%' gap={'20px'} id="ram" margin='auto' >
       
       <div class="container">
       <Image width='600px' height='270px' src="https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600"/>
       
       <div class="top-left"><Text fontSize='2xl' fontWeight='bold'  >Delhi <img display={'block'}    src="https://media.istockphoto.com/photos/indian-flag-picture-id177387875?b=1&k=20&m=177387875&s=170667a&w=0&h=K7FtMorv89_SAAFLwhLdlVg8WDklStnozUvmBXqiS3I=" alt="INDIA" />   </Text>   
       <Text fontSize='sm' >2,915 propartes</Text>
       </div>
       
                </div>
                <div class="container">
       <Image width='600px' height='270px' src="https://images.unsplash.com/photo-1551161242-b5af797b7233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHlkZXJhYmFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
       
       <div class="top-left"><Text fontSize='2xl' fontWeight='bold'  >Hybrabad <img display={'block'}    src="https://media.istockphoto.com/photos/indian-flag-picture-id177387875?b=1&k=20&m=177387875&s=170667a&w=0&h=K7FtMorv89_SAAFLwhLdlVg8WDklStnozUvmBXqiS3I=" alt="INDIA" />   </Text>   
       <Text fontSize='sm' >797 propartes</Text>
       </div>
       
                </div>
                <div class="container">
       <Image width='600px' height='270px' src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGtlcmFsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
       
       <div class="top-left"><Text fontSize='2xl' fontWeight='bold'  >Munnar<img display={'block'}    src="https://media.istockphoto.com/photos/indian-flag-picture-id177387875?b=1&k=20&m=177387875&s=170667a&w=0&h=K7FtMorv89_SAAFLwhLdlVg8WDklStnozUvmBXqiS3I=" alt="INDIA" />   </Text>   
       <Text fontSize='sm' >515 propartes</Text>
       </div>
       
                </div>
            </Box>


    </div>
    <br />
    <br />
    <Box  w='78%'  m='auto'  >   <Text fontSize='2xl'  fontWeight='bold'>Destinations we love</Text></Box>
    <br />
     <Box id="statk" w='78%'  m='auto' >
        {
               citydata.map((e)=>(
                <Box>
                    <Text fontWeight={'bold'}>{e.city}</Text>
                    
                    <Text  fontSize='12px'>{e.prp}</Text>
                    {/* <br /> */}
                </Box>
               ))
        }
       


<br />

     </Box>
     <br />
     <div id="raa" >
        <Text  pt={'40px'} fontSize='2xl'   fontWeight={'light'}  >Save time, save money!</Text>
        <Text  mt={'-5x'} pb='30px'  fontWeight={'light'}   >Sign up and we'll send the best deals to you</Text>
        
          {/* <input type="text" /> */}
          {/* <Input placeholder='Basic usage' /> */}
              <Box display={'flex'} justifyContent='center'  alignItems='center' gap={'10px'}>
              <Input bg={'white'} placeholder='Youer Email' htmlSize={40} width='auto' /> 
         <Button colorScheme='telegram'>Subscribe</Button>

              </Box>
             
              <Checkbox mt='10px' ml={'-90px'}   colorScheme='green'       >

              Send me a link to get the FREE Booking.com app!
    
  </Checkbox>
  <br />
  
  <br />
        
            </div>
            <div id="raa1">
            <Button  border={'1px solid white'} bg={'#003580'}   colorScheme='blackAlpha'><Text  fontSize={'sm'}   fontWeight={'light'}  >List your property </Text></Button>
            <br />
            <br />
            <hr />

            <Flex id="ela"   mt={'1rem'} justifyContent={'space-evenly'} alignItems={'center'} >
                <Text>Mobile version</Text>
                <Text>Your account</Text>
                <Text>Make changes to booking online</Text>
                <Text>customer service help</Text>
                <Text>Become a  afflicate</Text>
                <Text>Booking.com for Business </Text>
            </Flex>
            <br />
            </div>
            <br />
            <Flex id="avly" justifyContent={'space-between'} width='80%' margin='auto'>
                <br />
            
            <Box>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >countries</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Regions</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Cities</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Districts</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Airports</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Hotels</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Places of interset</Text>
            </Box>
            <Box>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Homes</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Apaertments</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Resorts</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Villas</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Hotels</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >B&Bs</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Guest Houes</Text>
            </Box>
            <Box>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >countries</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Regions</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Cities</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Districts</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Airports</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Places of interset</Text>
            </Box>
            <Box>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >countries</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Regions</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Cities</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Districts</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Airports</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Places of interset</Text>
            </Box>
            <Box>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >countries</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Regions</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Cities</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Districts</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Airports</Text>
                <Text  marginBottom={'4px'}  color={'blue.400'} fontSize='sm' >Places of interset</Text>
            </Box>

            </Flex>
            



   </div>

     
    
        
    )
}