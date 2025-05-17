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

export default function NotificationList() {
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
        
         { id: 1, type: "success", message: "Booking #1234 confirmed for May 18, 2025" },
  { id: 2, type: "error", message: "Your booking #1235 was cancelled" },
  { id: 3, type: "warning", message: "Reminder: Booking #1236 is tomorrow at 2:00 PM" },
  { id: 4, type: "info", message: "Booking #1237 updated: New time 4:00 PM" },
  { id: 5, type: "success", message: "Payment for booking #1238 was successful" },
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
                  <Th className="">Notifications</Th>
                 
                </Tr>
              </Thead>
              <Tbody>
                {datas.map((data) => {
                  return (
                    <Tr>
                      <Td className="cursor-pointer bg-blue-50">{data.message}</Td>
                      
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
