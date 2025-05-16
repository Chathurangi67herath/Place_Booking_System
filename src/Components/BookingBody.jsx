import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useLocation } from "react-router-dom";
import NavBar from "../pages/NavBar";

export default function BookingBody() {
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
  const [avail, onAvail] = useState(true);
  const [first, setFirst] = useState(false);
  const [booked, setBooked] = useState(false);
  const [data, setData] = useState([]);

  const location = useLocation();
  const deets = location.state;
  const hallname = location.state.hall;

  // useEffect(() => {
  //   axios
  //     .get(process.env.REACT_APP_SERVER_URL + "/getData", {
  //       params: {
  //         hall: hallname,
  //       },
  //     })
  //     .then(function (res) {
  //       setData(res.data);
  //     });
  // }, [booked]);
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
      // ... more bookings
    ];
    setData(mockData);
  }, [booked]);

  function sendNewBooking() {
    datevalue.setHours(0, 0, 0, 0);
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/postData", {
        hall: hallname,
        date: datevalue.toLocaleDateString(),
        startTime: timevalue[0],
        endTime: timevalue[1],
      })
      .then(function (response) {
        // onAvail(false)
        setBooked(true);
        console.log("new data inserted");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function checkAvail() {
    onAvail(true);
    datevalue.setHours(0, 0, 0, 0);

    data.forEach((i) => {
      if (i.date === datevalue.toLocaleDateString()) {
        if (
          (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
          (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
        ) {
        } else {
          onAvail(false);
        }
      }
    });

    setBooked(false);
    setFirst(true);
  }

  return (
      <>
                  <NavBar></NavBar>
    <Box
      ml={{ base: 0}}
      bg={useColorModeValue("gray.100", "gray.900")}
      p="4"
      minH={"85vh"}
    >
      <Box ml="8" mr="10" spacing="15">
        <Box
          px="7"
          pt="3"
          pb="12"
          borderRadius="xl"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text pt="4" fontSize={"2xl"} fontWeight="semibold">
            Booking Details ({hallname})
          </Text>
          <HStack pt="10" spacing={20} >
            {/* <form action="post" method="/sendData"> */}
            <HStack >
            <div className="grid grid-cols-1 gap-y-5 md:flex md:gap-2 lg:gap-5">
              <div>
              <DatePicker
                name="date"
                minDate={new Date()}
                onChange={(e) => {
                  setFirst(false);
                  onDateChange(e);
                }}
                value={datevalue}
              />
                
              </div>
             
             <div>
             <TimeRangePicker
                name="time"
                minTime="8:00"
                maxTime="21:00"
                hourPlaceholder="hh"
                minutePlaceholder="mm"
                rangeDivider="to"
                format="h:mm a"
                onChange={(e) => {
                  setFirst(false);
                  onTimeChange(e);
                }}
                value={timevalue}
              />
             </div>
             <div>
             <Link style={{ textDecoration: "none" }}>
              <Button colorScheme="linkedin" onClick={checkAvail}>
                Check Availability
              </Button>
            </Link>
             </div>
            </div>
            </HStack>
            {/* <Link style={{ textDecoration: "none" }}>
              <Button colorScheme="linkedin" onClick={checkAvail}>
                Check Availability
              </Button>
            </Link> */}
            {/* </form> */}
          </HStack>

          {first &&
            (avail ? (
              booked ? (
                <Box>
                  <Text>{hallname} has been booked! </Text>
                  <Text>Date: {datevalue.toLocaleDateString()}</Text>
                  <Text>
                    Time: {timevalue[0]}-{timevalue[1]}
                  </Text>
                </Box>
              ) : (
                <Box>
                  <Text>It is available</Text>
                  <Button
                    onClick={sendNewBooking}
                    colorScheme="linkedin"
                    mt="10"
                  >
                    {/* Book Hall{" "} */}

                    <a href="/bookingCalender" className=" hover:underline">Book Hall</a>
                  </Button>
                 
                </Box>
              )
            ) : (
              <Text>It is not available</Text>
            ))}
        </Box>
        <Box
          mt="10"
          px="7"
          pt="3"
          pb="12"
          borderRadius="xl"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text mt="5" mb="5" p="2" fontWeight={"semibold"} fontSize="2xl">
            Details
          </Text>
          <HStack>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 md:flex lg:gap-x-8">
            <Box >
              <Image
                rounded={"lg"}
                height={210}
                width={300}
                objectFit={"cover"}
                src={deets.imgsrc}
              />
            </Box>
            <Box>
              <Stack>
                <Heading fontSize={"4xl"} fontFamily={"body"} fontWeight={800}>
                  {deets.hall}
                </Heading>
                <Text
                  pb="2"
                  color={"gray.500"}
                  fontSize={"xm"}
                  textTransform={"uppercase"}
                >
                  ({deets.block})
                </Text>
                <Text>
                  {deets.hall} is located in {deets.block}. It has comfortable
                  seating and a lot of events have been conducted in here! It
                  holds a capacity of {deets.capacity} people.
                </Text>
                <Stack direction={"row"} align={"center"}>
                  <Text mt="6" fontStyle={"italic"} fontSize={"l"}>
                    Max Capacity : {deets.capacity}
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Box></Box>
            </div>
          </HStack>
        </Box>
        <Box
          mt="10"
          px="7"
          pt="3"
          pb="12"
          borderRadius="xl"
          bg={useColorModeValue("white", "gray.500")}
        >
          <Text mt="5" mb="5" p="2" fontWeight={"semibold"} fontSize="2xl">
            Booking Details
          </Text>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {/* <Th>Hall</Th> */}
                  <Th>Date</Th>
                  <Th>Event</Th>
                  <Th>Start time</Th>
                  <Th>End time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((i) => {
                  return (
                    <Tr>
                      {/* <Td>{i.hall}</Td> */}
                      <Td>{i.date}</Td>
                      <Td>{i.event}</Td>
                      <Td>{i.startTime}</Td>
                      <Td>{i.endTime}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box> </>
  );
}
