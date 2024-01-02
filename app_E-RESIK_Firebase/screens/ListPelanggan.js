import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  ScrollView,
  Button,
  Modal,
  VStack,
  HStack,
  TouchableOpacity,
} from "native-base";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const ListPelanggan = () => {
  //Deklarasi
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  return (
    <>
      <Header title={"List Pelanggan"} withBack="true" />
      <SafeAreaView flex={1}>
        <ScrollView>
          <Center my={4}>
            <Box
              w="80"
              rounded="xl"
              bg="#FFFF"
              borderColor="#0878CA"
              borderWidth="2"
            >
              {/* Customer 1 */}
              <VStack p="4" space={3}>
                <Heading size="md" ml="-1">
                  Anggi Aulia Putri
                </Heading>
                <Text fontSize="md">Pelanggan 1</Text>

                <Text
                  onPress={() => setShowModal(true)}
                  fontWeight="400"
                  color={"#0878CA"}
                >
                  Detail Pelanggan
                </Text>
              </VStack>
            </Box>

            {/* Modal 1 */}
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              size="lg"
            >
              <Modal.Content
                maxWidth="350"
                borderColor={"#0878CA"}
                borderWidth={2}
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Detail Customer</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nama</Text>
                        <Text color="blueGray.400">Anggi Aulia Putri</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Jenis Kelamin</Text>
                        <Text color="blueGray.400">Perempuan</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Alamat</Text>
                        <Text color="blueGray.400">Jl. Ketintang Madya</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nomor Telepon</Text>
                        <Text color="blueGray.400">+6285732206455</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Box>
              </Modal.Content>
            </Modal>

            <Box
              mt="5"
              w="80"
              rounded="xl"
              bg="#FFFF"
              borderColor="#0878CA"
              borderWidth="2"
            >
              {/* Customer 2 */}
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Dewi Nahrisa Amelia
                  </Heading>
                  <Text fontSize="md">Pelanggan 2</Text>
                </Stack>
                <Text
                  onPress={() => setShowModal1(true)}
                  fontWeight="400"
                  color={"#0878CA"}
                >
                  Detail Pelanggan
                </Text>
              </Stack>
            </Box>

            {/* Modal 2 */}
            <Modal
              isOpen={showModal1}
              onClose={() => setShowModal1(false)}
              size="lg"
            >
              <Modal.Content
                maxWidth="350"
                borderColor={"#0878CA"}
                borderWidth={2}
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Detail Customer</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nama</Text>
                        <Text color="blueGray.400">Dewi Nahrisa Amelia</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Jenis Kelamin</Text>
                        <Text color="blueGray.400">Perempuan</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Alamat</Text>
                        <Text color="blueGray.400">Jl. Ketintang Baru</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">No. Handphone</Text>
                        <Text color="blueGray.400">+6285712345678</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Box>
              </Modal.Content>
            </Modal>

            <Box
              mt="5"
              w="80"
              rounded="xl"
              bg="#FFFF"
              borderColor="#0878CA"
              borderWidth="2"
            >
              {/* Customer 3 */}
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    M.Zhahnur Arif
                  </Heading>
                  <Text fontSize="md">Pelanggan 3</Text>
                </Stack>
                <Text
                  onPress={() => setShowModal1(true)}
                  fontWeight="400"
                  color={"#0878CA"}
                >
                  Detail Pelanggan
                </Text>
              </Stack>
            </Box>

            {/* Modal 2 */}
            <Modal
              isOpen={showModal1}
              onClose={() => setShowModal1(false)}
              size="lg"
            >
              <Modal.Content
                maxWidth="350"
                borderColor={"#0878CA"}
                borderWidth={2}
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Detail Customer</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nama</Text>
                        <Text color="blueGray.400">M.Zhahnur Arif</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Jenis Kelamin</Text>
                        <Text color="blueGray.400">Laki-Laki</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Alamat</Text>
                        <Text color="blueGray.400">Jl. Ketintang Baru</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">No. Handphone</Text>
                        <Text color="blueGray.400">+6285712345678</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Box>
              </Modal.Content>
            </Modal>

            <Box
              mt="5"
              w="80"
              rounded="xl"
              bg="#FFFF"
              borderColor="#0878CA"
              borderWidth="2"
            >
              {/* Customer 4 */}
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Ridho Rahmattulloh
                  </Heading>
                  <Text fontSize="md">Pelanggan 4</Text>
                </Stack>
                <Text
                  onPress={() => setShowModal1(true)}
                  fontWeight="400"
                  color={"#0878CA"}
                >
                  Detail Pelanggan
                </Text>
              </Stack>
            </Box>

            {/* Modal 2 */}
            <Modal
              isOpen={showModal1}
              onClose={() => setShowModal1(false)}
              size="lg"
            >
              <Modal.Content
                maxWidth="350"
                borderColor={"#0878CA"}
                borderWidth={2}
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Detail Customer</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nama</Text>
                        <Text color="blueGray.400">Ridho Rahmattuloh</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Jenis Kelamin</Text>
                        <Text color="blueGray.400">Laki-Laki</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Alamat</Text>
                        <Text color="blueGray.400">Jl. Ketintang Baru</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">No. Handphone</Text>
                        <Text color="blueGray.400">+6285712345678</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Box>
              </Modal.Content>
            </Modal>

            <Box
              mt="5"
              w="80"
              rounded="xl"
              bg="#FFFF"
              borderColor="#0878CA"
              borderWidth="2"
            >
              {/* Customer 4 */}
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    Farrel Ardan
                  </Heading>
                  <Text fontSize="md">Pelanggan 5</Text>
                </Stack>
                <Text
                  onPress={() => setShowModal1(true)}
                  fontWeight="400"
                  color={"#0878CA"}
                >
                  Detail Pelanggan
                </Text>
              </Stack>
            </Box>

            {/* Modal 2 */}
            <Modal
              isOpen={showModal1}
              onClose={() => setShowModal1(false)}
              size="lg"
            >
              <Modal.Content
                maxWidth="350"
                borderColor={"#0878CA"}
                borderWidth={2}
              >
                <Box mx={2}>
                  <Modal.CloseButton />
                  <Modal.Header>Detail Customer</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Nama</Text>
                        <Text color="blueGray.400">Farrel Ardan</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Jenis Kelamin</Text>
                        <Text color="blueGray.400">Laki-Laki</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">Alamat</Text>
                        <Text color="blueGray.400">Jl. Ketintang Baru</Text>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text fontWeight="medium">No. Handphone</Text>
                        <Text color="blueGray.400">+6285712345678</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                </Box>
              </Modal.Content>
            </Modal>

            <Button
              borderRadius={"xl"}
              bg="#0878CA"
              md="5"
              mt={5}
              onPress={() => navigation.navigate("BuatPelanggan")}
            >
              Tambah Pelanggan
            </Button>
          </Center>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ListPelanggan;
