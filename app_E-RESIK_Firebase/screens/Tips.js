import { Heading, Image, Text, FlatList, Button } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";

const Tips = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Beranda", { item: item })}
      >
        <Box
          p={"4"}
          bg="#FFFF"
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"4"}>
            <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              borderColor={"#0878CA"}
              borderWidth={"2"}
              alt="Image Data"
            />
          </Box>
          <Box flex={1.8}>
            <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Tips"} withBack="true" />
      {/* <Heading h="50" w="full" bg="primary.800" bold size="lg" color="muted.100" style={{ textAlign: 'center', textAlignVertical: 'center'}}>
                INFORMASI
            </Heading> */}
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Button bg="#0878CA" onPress={() => navigation.navigate("ListCustomer")}>
        Lihat List Customer
      </Button>
    </>
  );
};

export default Tips;
