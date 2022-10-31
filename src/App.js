import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
  Stack,
  Spacer,
} from "@chakra-ui/react";

/*
  Color Code:
  Ungu : #805AD5
  Gray : #E9D8FD
*/

function App() {
  const features = [
    "International callimg and messaging API",
    "Additional phone numbers",
    "Automated messages via Zipier",
    "24/7 spport and consulting",
  ];
  const benefits = [
    {
      icon: "",
      text: "30 days money back Guaratee",
    },
    {
      icon: "",
      text: "No setup feees 100% haqssle-free",
    },
    {
      icon: "",
      text: "No monthly subscription Pay once and for all",
    },
  ];
  return (
    <Flex
      direction="column"
      justifyContent="center"
      position="relative"
      h="54rem"
      margin="auto"
    >
      <Box bg="#805AD5" h="50%"></Box>
      <Box bg="white" h="50%"></Box>
      <Box
        position="absolute"
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Heading fontSize="48px" color="white" fontWeight="800">
          Simple Pricing For Your Business
        </Heading>
        <Text fontSize="24px" fontWeight="400" color="white">
          Plans that are carefully craftes to suit your business
        </Text>

        <HStack
          bg="white"
          borderRadius="10px"
          width="60rem"
          height="20rem"
          shadow="md"
        >
          <Box
            h="100%"
            w="35%"
            bg="#E9D8FD"
            borderTopLeftRadius="10px"
            borderBottomLeftRadius="10px"
          >
            <Flex
              h="100%"
              direction="column"
              padding="3rem"
              justifyContent="center"
              alignItems="center"
              gap="1rem"
            >
              <Text fontSize="25px" fontWeight="800">
                Premium PRO
              </Text>
              <Heading fontSize="50px" fontWeight="800">
                $329
              </Heading>
              <Text fontWeight="600">billed just once</Text>
              <Button w="100%" color="white" bg="#805AD5">
                Get Started
              </Button>
            </Flex>
          </Box>
          <Box height="100%" width="65%" padding="3rem" fontSize="20px">
            <Text marginBottom="1rem">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="1rem">
              {features.map((data, i) => (
                <Text key={i}>✔ {data}</Text>
              ))}
            </Stack>
          </Box>
        </HStack>

        <Flex w="60rem" justifyContent="space-between"  gap="2rem"  fontWeight="800" fontSize="18px">
          {benefits.map((data, i) => (
            <>
              <Box key={i} w="30%" >
                {data.text}
              </Box>
            </>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
