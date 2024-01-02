import React from "react";
import {
  Box,
  FormControl,
  Radio,
  Input,
  Button,
  Text,
  Center,
  ScrollView,
} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const BuatPelanggan = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("one");

  return (
    <>
      <Header title={"Tambah Pelanggan"} withBack="true" />
      <Center>
        <SafeAreaView>
          <Box
            mt={10}
            p="5"
            bg="#FFFF"
            w="80"
            borderColor="#0878CA"
            borderWidth="2"
            rounded="2xl"
            shadow={2}
          >
            <FormControl isRequired>
              {/* Nama */}
              <FormControl.Label>Nama</FormControl.Label>
              <Input variant="rounded" type="text" placeholder="nama" />

              {/* Jenis Kelamin */}
              <FormControl.Label>Jenis Kelamin</FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio value="one" my={1}>
                  Laki-laki
                </Radio>
                <Radio value="two" my={1}>
                  Perempuan
                </Radio>
              </Radio.Group>

              {/* Alamat */}
              <FormControl.Label>Alamat</FormControl.Label>
              <Input variant="rounded" type="text" placeholder="alamat" />
              <FormControl.HelperText>
                {" "}
                Masukkan alamat lengkap{" "}
              </FormControl.HelperText>

              {/* No. Hp*/}
              <FormControl.Label>No. Handphone</FormControl.Label>
              <Input variant="rounded" type="number" placeholder="+62" />

              {/* BUTTON BELUM SELESAI */}
              <Center>
                <Button
                  bg="#0878CA"
                  borderRadius="xl"
                  justifyContent={"center"}
                  mt={5}
                  onPress={() => navigation.navigate("ListPelanggan")}
                  w={100}
                >
                  Submit
                </Button>
              </Center>
            </FormControl>
          </Box>
        </SafeAreaView>
      </Center>
    </>
  );
};

export default BuatPelanggan;
