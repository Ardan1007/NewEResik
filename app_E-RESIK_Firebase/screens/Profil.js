import { Box, Image, Center, Stack, Heading, Text, HStack, Button, VStack, Divider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { Header } from "../components";
import { Avatar } from "native-base";
import { useState,useEffect } from "react";
import { clearStorage, getData } from "../src/utils/localStorage"
import FIREBASE from "../src/config/FIREBASE";



const ProfileUser = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);

  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };
  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };
 
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("Masuk");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("Masuk");
    }
  };
  return (
<>  
    <Header title={"HOME"} />
      <Center flex={1}>
      </Center>
      <ScrollView>
    <Box alignItems="center">
      <HStack py="40">
        <Box w="80" rounded="lg" bg="muted.100" borderColor={"#0878CA"} borderWidth="2" >
          <Stack p="5" space={10}>
            <Stack space={2}>
              <Avatar alignSelf="center" size="2xl" source={{
                uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              }}>
                RB
              </Avatar>
              <Heading> PROFILE </Heading>
              <Divider></Divider>
              <Text fontWeight="400">
              Gmail :{profile?.email}
              </Text>
              <Text fontWeight="400">
              nama :{profile?.nama}
              </Text>
              <Text fontWeight="400">
                Alamat : {profile?.alamat}
              </Text>
              <Text fontWeight="400">
                kode pos : {profile?.kodepos}
              </Text>
              <Divider></Divider>
            </Stack>
          </Stack>
        </Box>
      </HStack>
      <Stack space="2"  mb="10">
        <HStack space="6" mx="12" >
        <Button 
          onPress={EditProfile}
          bg={"#0878CA"}
          size="12" rounded="xl" 
          _text={{
            color: "white"
          }} shadow="1">
            Edit
          </Button>
          <Button 
          onPress={() => onSubmit(profile)}
          bg={"#0878CA"} 
          size="12" 
          rounded="xl" 
          _text={{
            color: "white"
          }} shadow="1">
            Keluar
          </Button>
        </HStack>
      </Stack>
    </Box>
    </ScrollView>
    </>  
  );
};

export default ProfileUser