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
          "hall": "Conference Hall A",
          "date": "5/20/2025",
          "event" : "Pinihibiri Diyawara",
          "startTime": "09:00",
          "endTime": "11:00"
        },
        {
          "hall": "Conference Hall A",
          "date": "5/21/2025",
          "event" : "Adawwa",
          "startTime": "13:00",
          "endTime": "15:00"
        },
        {
          "hall": "Conference Hall B",
          "date": "5/20/2025",
          "event" : "Himidiriya",
          "startTime": "10:00",
          "endTime": "12:00"
        },
        {
          "hall": "Conference Hall A",
          "date": "5/22/2025",
          "event" : "26th Convocation",
          "startTime": "08:00",
          "endTime": "10:00"
        }
        ,
        {
          "hall": "Conference Hall A",
          "date": "5/20/2025",
          "event" : "Pinihibiri Diyawara",
          "startTime": "09:00",
          "endTime": "11:00"
        },
        {
          "hall": "Conference Hall A",
          "date": "5/21/2025",
          "event" : "Adawwa",
          "startTime": "13:00",
          "endTime": "15:00"
        },
        {
          "hall": "Conference Hall B",
          "date": "5/20/2025",
          "event" : "Himidiriya",
          "startTime": "10:00",
          "endTime": "12:00"
        },
        {
          "hall": "Conference Hall A",
          "date": "5/22/2025",
          "event" : "26th Convocation",
          "startTime": "08:00",
          "endTime": "10:00"
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
