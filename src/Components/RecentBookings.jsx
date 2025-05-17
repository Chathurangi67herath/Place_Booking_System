import {
  Box,
  Center,
  Spinner,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../pages/NavBar";

export default function RecentBookings() {
  const [datas, setDatas] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_SERVER_URL + "/getHistory")
  //     .then(function (res) {
  //       console.log(res.data);
  //       setDatas(res.data);
  //     });
  // }, []);

    useEffect(() => {
      // Mock data instead of axios.get
      const mockData = [
        
        {
          "hall": "Panibharatha Open Air Theater",
          "date": "5/20/2025",
          "event" : "Pinihibiri Diyawara",
          "startTime": "18:00",
          "endTime": "24:00"
        },
        {
          "hall": "Main Canteen (Matta Canteen)",
          "date": "5/21/2025",
          "event" : "Adawwa",
          "startTime": "18:00",
          "endTime": "23:00"
        },
        {
          "hall": "Panibharatha Open Air Theater",
          "date": "5/22/2025",
          "event" : "Himidiriya",
          "startTime": "17:00",
          "endTime": "24:00"
        },
        {
          "hall": "D.Somasundara Auditorium",
          "date": "5/23/2025",
          "event" : "26th Convocation",
          "startTime": "08:00",
          "endTime": "16:00"
        }
        ,
        {
          "hall": "Pool Side",
          "date": "5/24/2025",
          "event" : "Blood Donation Camp",
          "startTime": "09:00",
          "endTime": "12:00"
        },
        {
          "hall": "Main Ground (Matta Ground)",
          "date": "5/24/2025",
          "event" : "Inter University Games",
          "startTime": "08:00",
          "endTime": "16:00"
        },
        {
          "hall": "Mahagedara Auditorium",
          "date": "5/30/2025",
          "event" : "End Examination - External",
          "startTime": "08:00",
          "endTime": "12:00"
        }
        ,
        {
          "hall": "Art Center",
          "date": "06/06/2025",
          "event" : "Himidiriya - Practice",
          "startTime": "16:00",
          "endTime": "22:00"
        },
        {
          "hall": "Hunduwa Ground",
          "date": "06/20/2025",
          "event" : "IPL - FOM",
          "startTime": "08:00",
          "endTime": "14:00"
        }
        // ... more bookings
      ];
      setDatas(mockData);
    }, []);

  return (
     <>
          <NavBar></NavBar>
    <Box
      ml={{ base: 0 }}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box
        px="7"
        pt="3"
        pb="12"
        borderRadius="xl"
        bg={useColorModeValue("white", "gray.500")}
      >
        {datas.length === 0 ? (
          <Center>
            <VStack>
              <Spinner
                thickness="3px"
                speed="0.65s"
                size="lg"
                emptyColor="gray.200"
                color="blue.500"
              >
                {" "}
              </Spinner>

              <Text>Data is loading. Please wait...</Text>
            </VStack>
          </Center>
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Hall</Th>
                  <Th>Event</Th>
                  <Th>Date</Th>
                  <Th>Start time</Th>
                  <Th>End time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {datas.map((data) => {
                  return (
                    <Tr>
                      <Td>{data.hall}</Td>
                      <Td>{data.event}</Td>
                      <Td>{data.date}</Td>
                      <Td>{data.startTime}</Td>
                      <Td>{data.endTime}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>  </>
  );
}
