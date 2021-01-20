import Link from "next/link";
import {
  Box,
  Badge,
  Image,
  HStack,
  Heading,
  List,
  ListItem,
  ListIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/core";
import { Entity } from "../../interfaces/index";
import { MdAddLocation } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BannerCel } from "../promos/BannerCel";

type Props = {
  items: Entity[];
};

export const Locales = ({ items }: Props) => {
  return (
    <>
      <Tabs
        isLazy
        align="center"
        size="sm"
        variant="soft-rounded"
        colorScheme="red">
        {/* <Carousel indicators={false}> */}
        {/* <Carousel.Item> */}
        <TabList>
          <SimpleGrid columns={3} spacing={1}>
            {items.map((sub, index) => (
              <Tab key={index}>
                {sub.subcategories.toString().replace(",", "-")}
              </Tab>
            ))}
          </SimpleGrid>
        </TabList>
        {/* </Carousel.Item> */}
        {/* </Carousel> */}
        <TabPanels>
          {items.map((item, index) => (
            <TabPanel key={index}>
              <Box
                m={[2, 5, 7, 9]}
                maxWidth="48rem"
                w="90%"
                borderWidth="3px"
                borderRadius="lg"
                key={item._id}>
                <HStack spacing={2}>
                  <Box>
                    <Image
                      src={item.imagePath}
                      alt="Imagen"
                      borderRadius="full"
                      boxSize={[9, 14, 18]}
                      m="2"
                    />
                  </Box>
                  <Heading as="h2" size="md">
                    {item.name}
                  </Heading>
                  {/* onClick={() => router.push("/Entity/[id]", `/entity/${item._id}`)} */}
                  <Link href="/entity/[id]" as={`/entity/${item._id}`}>
                    Ver Mas
                  </Link>
                </HStack>
                <Box p="2">
                  <Box d="flex" alignItems="baseline">
                    {item.subcategories.map((cate, i) => (
                      <Box
                        color="gray.500"
                        fontWeight="normal"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="1"
                        key={i}>
                        <Badge borderRadius="full" px="1" colorScheme="teal">
                          &bull; {cate}
                        </Badge>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  m={3}
                  letterSpacing="wide"
                  fontWeight="semibold"
                  // as="h4"
                  lineHeight="tight"
                  isTruncated>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdAddLocation} color="green.500" />
                      {item.location.address} - {item.location.city}
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaWhatsapp} color="green.500" />
                      {item.contact.cellphone}
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <BannerCel />
    </>
  );
};
