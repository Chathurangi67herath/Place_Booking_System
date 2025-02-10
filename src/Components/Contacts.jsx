import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Contacts() {
  return (
    <Box
      ml={{ base: 0}}
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
        <Text
          fontSize="l"
          as="u"
          fontWeight="semibold"
          fontStyle="underline"
          mb="10"
        >
          For any queries
        </Text>
        <Text mt="5">
          Contact Miss.Chamodi Herath
          <br />
          Phone no : +94 762836728
          <br />
          Email : herachamodi@gmail.com
        </Text>
      </Box>
    </Box>
  );
}
