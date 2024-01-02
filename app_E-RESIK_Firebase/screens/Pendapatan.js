import { Header } from "../components";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Stack,
  Heading,
  HStack,
  Text,
  ScrollView,
  Image,
  Center,
  VStack,
  Container,
  FlatList,
} from "native-base";

const Pendapatan = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"Pendapatan"} withBack="true" />

      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DetailPendapatan")}
          >
            <Box alignItems="center" mt="5">
              <Box
                mx={4}
                rounded="xl"
                overflow="hidden"
                shadow={4}
                borderColor="#0878CA"
                borderWidth="1"
                backgroundColor="#FFFF"
              >
                <Stack p="4" space={3}>
                  <Box>
                    <HStack>
                      <Image
                        source={require("../assets/hari.jpg")}
                        w="20"
                        h="20"
                      ></Image>
                      <Container>
                        <Box mx={2} px={2}>
                          <VStack>
                            <Heading color="#0878CA" size="md" ml="-1">
                              MINGGUAN
                            </Heading>

                            <Text fontWeight="400">
                              Berisi tentang Laporan Pendapatan selama satu hari
                              dimulai dari jam buka 08.00 WIB sampai jam tutup
                              22.00 WIB.
                            </Text>
                          </VStack>
                        </Box>
                      </Container>
                    </HStack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DetailPendapatan")}
          >
            <Box alignItems="center" mt={5}>
              <Box
                mx={4}
                rounded="xl"
                overflow="hidden"
                shadow={4}
                borderColor="#0878CA"
                borderWidth="1"
                backgroundColor="#FFFF"
              >
                <Stack p="4" space={3}>
                  <Box>
                    <HStack>
                      <Image
                        source={require("../assets/bulan.jpg")}
                        w="20"
                        h="20"
                      ></Image>
                      <Container>
                        <Box mx={2} px={2}>
                          <VStack>
                            <Heading color="#0878CA" size="md" ml="-1">
                              BULANAN
                            </Heading>
                            <Text fontWeight="400">
                              Berisi tentang Laporan Pendapatan selama satu
                              bulan dimulai dari awal bulan tanggal 1 sampai
                              akhir tanggal 30.
                            </Text>
                          </VStack>
                        </Box>
                      </Container>
                    </HStack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DetailPendapatan")}
          >
            <Box alignItems="center" mt={5}>
              <Box
                mx={4}
                rounded="xl"
                shadow={4}
                overflow="hidden"
                borderColor="#0878CA"
                borderWidth="1"
                backgroundColor="#FFFF"
              >
                <Stack p="4" space={3}>
                  <Box px={2}>
                    <HStack>
                      <Image
                        source={require("../assets/tahun.jpg")}
                        w="20"
                        h="20"
                      ></Image>
                      <Container>
                        <Box mx={2} px={2}>
                          <VStack>
                            <Heading color="#0878CA" size="md" ml="-1">
                              TAHUNAN
                            </Heading>

                            <Text fontWeight="400">
                              Berisi tentang Laporan Pendapatan selama satu
                              tahun dimulai dari bulan Januari sampai bulan
                              Desember.
                            </Text>
                          </VStack>
                        </Box>
                      </Container>
                    </HStack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Pendapatan;
