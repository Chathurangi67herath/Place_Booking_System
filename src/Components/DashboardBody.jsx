import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import HallCard from "./HallCard";
import NavBar from "../pages/NavBar";

const placeInformation = [
  { imgsrc: './wala.jpg', block: 'OPEN', hall: 'Panibharatha Open Air Theater', capacity:'1000' },
{  imgsrc:"./pool.jpg", block:"OPEN", hall:"Pool Side", capacity:"100"},
{ imgsrc:"./socailAudi.png",block:"INSIDE",hall:"Social Science - Auditorium",capacity:"2000"},
{ imgsrc: 'https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg', block: 'HERITAGE', hall: 'BOARD MEETING ROOM', capacity:'100' },
{  imgsrc:"https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg", block:"ESB", hall:"ESB BIG SEMINAR HALL", capacity:"500"},
{ imgsrc:"https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80",block:"ESB",hall:"ESB SEMINAR HALL 2",capacity:"300"},
{ imgsrc: 'https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg', block: 'HERITAGE', hall: 'BOARD MEETING ROOM', capacity:'100' },
{  imgsrc:"https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg", block:"ESB", hall:"ESB BIG SEMINAR HALL", capacity:"500"},
{ imgsrc:"https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80",block:"ESB",hall:"ESB SEMINAR HALL 2",capacity:"300"}


]

export default function DashboardBody() {
  return (
    <>
      <NavBar></NavBar>
    <Box
      ml={{ base: 0 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box pl="10" pr="10">
        <Grid className="grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 2xl:grid-cols-5">
        {placeInformation && placeInformation.map((item) => (
                           <GridItem w="100%">
                           <HallCard
                             imgsrc= {item.imgsrc}
                             block={item.block}
                             hall={item.hall}
                             capacity={item.capacity}
                           ></HallCard>
                         </GridItem> 
                            ))}
        </Grid>
      </Box>
    </Box></>
  );
}