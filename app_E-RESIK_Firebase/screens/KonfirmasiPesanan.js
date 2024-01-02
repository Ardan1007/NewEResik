import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Stack,
  Text,
  HStack,
  Icon,
  Heading,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FIREBASE from "../src/config/FIREBASE";
import { Header } from "../components";

const KonfirmasiPesanan = () => {
  const navigation = useNavigation();
  const [latestPesanan, setLatestPesanan] = useState(null);

  useEffect(() => {
    const fetchLatestPesanan = async () => {
      try {
        const pesananRef = FIREBASE.database().ref("Pesanan");

        pesananRef
          .orderByKey()
          .limitToLast(1)
          .on("value", (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const pesananKey = Object.keys(data)[0];
              const latestPesananData = data[pesananKey];
              setLatestPesanan(latestPesananData);
            }
          });
      } catch (error) {
        console.error("Error fetching latest pesanan:", error);
      }
    };

    fetchLatestPesanan();
  }, []);

  return (
    <>
      <Header title={"Konfirmasi Pesanan"} withBack="true" />
      <ScrollView>
        <Box
          p={2}
          mx={10}
          my={4}
          bg="#FFFF"
          borderRadius="xl"
          borderColor="#0878CA"
          borderWidth={"2"}
        >
          <Stack space={4} mx="auto" mt={4}>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="person" />} />
              <Text bold> Nama</Text>
            </HStack>
            <Text>{latestPesanan?.nama}</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="call" />} />
              <Text bold> Nomor HP</Text>
            </HStack>
            <Text>{latestPesanan?.noHp}</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="home" />} />
              <Text bold> Alamat</Text>
            </HStack>
            <Text>{latestPesanan?.alamat}</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="list" />} />
              <Text bold> Jenis Layanan</Text>
            </HStack>
            <Text>{latestPesanan?.layanan}</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="calendar" />} />
              <Text bold> Tanggal Pesanan</Text>
            </HStack>
            <Text>{latestPesanan?.tanggal}</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="barbell" />} />
              <Text bold> Berat</Text>
            </HStack>
            <Text>{latestPesanan?.berat}</Text>
            <HStack alignItems="center">
              <Icon as={<Ionicons name="information-circle" />} />
              <Text bold> Keterangan</Text>
            </HStack>
            <Text>{latestPesanan?.keterangan}</Text>
            <Text  fontSize="lg" fontWeight="bold" textAlign="center" mb={3}>Total Harga {latestPesanan?.Harga}</Text>
          </Stack>
          <Box mb={4} px={5}>
            <Button
              bg={"#0878CA"}
              rounded={"xl"}
              onPress={() => navigation.navigate("Tagihan")}
              mt={2}
              mx={7}
            >
              Konfirmasi Pesanan
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default KonfirmasiPesanan;
