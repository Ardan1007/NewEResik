import { Header } from "../components/";
import {
  Box,
  HStack,
  Text,
  FlatList,
  Image,
  VStack,
  Spacer,
  Button,
  AlertDialog,
  Center,
} from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DetailPendapatan = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: "1",
      hari: "Senin",
      pendapatan: "Rp. 500.000,-",
    },
    {
      id: "2",
      hari: "Selasa",
      pendapatan: "Rp. 450.000,-",
    },
    {
      id: "3",
      hari: "Rabu",
      pendapatan: "Rp. 1.000.000,-",
    },
    {
      id: "4",
      hari: "Kamis",
      pendapatan: "Rp. 650.0000,-",
    },
    {
      id: "5",
      hari: "Jumat",
      pendapatan: "Rp. 300.000,-",
    },
  ];

  return (
    <>
      <Header title={"Detail Pedapatan"} withBack="true" />
      <Center flex={1}></Center>
      <Box mx={4} my={4} mb="500">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="2"
              borderStyle="dotted"
              borderColor="#0878CA"
              pl={["0", "4"]}
              pr={["0", "5"]}
              py="2"
            >
              <HStack space={[4, 4]} justifyContent="space-between">
                <Image
                  source={require("../assets/hari.jpg")}
                  w="10"
                  h="10"
                ></Image>
                <VStack>
                  <Text color="#0878CA" mt="2" bold>
                    {item.hari}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  color="#0878CA"
                  alignSelf="flex-start"
                  mt="2"
                >
                  {item.pendapatan}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
        <Box alignItems="center">
          <Button
            mt="7"
            bg={"#0878CA"}
            onPress={() => navigation.navigate("TambahPendapatan")}
          >
            Tambah
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default DetailPendapatan;
