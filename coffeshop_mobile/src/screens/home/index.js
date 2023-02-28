import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import commonStyle from "../../styles/commonStyle";
import style from "./style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({ navigation }) => {
  const [dataProduct, setDataProduct] = useState([]),
    [refetch, setRefetch] = useState(false),
    [modalDelete, setModalDelete] = useState({
      show: false,
      idProduct: ''
    });
  useEffect(() => {
    axios
      .get("http://192.168.1.4:5000/api/v1/products?limit=5")
      .then((res) => setDataProduct(res.data.data))
      .catch((err) => console.log(err.message));
  }, [refetch]);
  const handleDelete = (idProduct) => {
    // Alert.alert("Apa Kamu Yakin?", "Kamu akan menghapus ini", [
    //   { text: "Tidak" },
    //   { text: "Haqqul Yaqin", onPress: ()=> {
    //     axios.delete(`http://192.168.1.4:5000/api/v1/products/${idProduct}`)
    //     .then((res)=> {
    //       setRefetch(!refetch)
    //       ToastAndroid.show('Berhasil dihapus', ToastAndroid.SHORT)
    //     })
    //     .catch((err)=> {
    //       console.log(err.response)
    //       ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
    //     })
    //   }},
    // ], {cancelable: true});
    axios.delete(`http://192.168.1.4:5000/api/v1/products/${idProduct}`)
    .then((res)=> {
      setRefetch(!refetch)
      ToastAndroid.show('Berhasil dihapus', ToastAndroid.SHORT)
      setModalDelete({ show: false, idProduct: '' })
    })
    .catch((err)=> {
      console.log(err.response)
      ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
    })
  };


  const [isLoggin, setIsLoggin] = React.useState({
    value: false, data: null
  })
  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData')
      if(value !== null) {
        setIsLoggin({
          value: true,
          data: JSON.parse(value)
        })
      }else {
        setIsLoggin({
          value: false,
          data: null
        })
      }
    } catch(e) {
      // error reading value
    }
  }
  React.useEffect(()=> {
    getDataAuth()
  },[])
  
  return (<>
    <View style={commonStyle.bg}>
      <Text style={[commonStyle.mlBase, style.title]}>
      <Pressable onPress={()=> {
        AsyncStorage.removeItem('@userData')
        alert('logouted')
      }}><Text>Logout</Text></Pressable>
      <Text style={{ fontSize:15 }}>Halo, {isLoggin.value ? isLoggin.data.user.username: ''}</Text> {`\n`}A good coffee is{`\n`}a good day
      </Text>
      <View>
        <Text style={[commonStyle.mlBase, style.sectionTitle]}>
          Favorite Products
        </Text>
        <FlatList
          horizontal
          data={dataProduct}
          renderItem={({ item }) => {
            // console.log(
            //   `http://192.168.1.4:5000/uploads/images/${item.images[0].filename}`
            // );
            return (
              <Pressable
                style={style.cardWrap}
                android_ripple={{
                  color: "#F2F2F299",
                  foreground: true,
                  borderless: true,
                }}
                onPress={() => {
                  navigation.navigate("DetailProduct");
                  // navigation.push('DetailProduct')
                }}
              >
                {/* <Image
                  //url harus di tambahin width dan height
                  //di local ga perlu dah tampil.
                  source={{
                    uri: `http://192.168.1.4:5000/uploads/images/${item.images[0].filename}`,
                  }}
                  // source={require('../../images/prod.png')}
                  style={{
                    width: "75%",
                    height: "70%",
                    borderRadius: 30,
                    position: "absolute",
                    zIndex: 2,
                    resizeMode: "cover",
                  }}
                /> */}
                <View style={style.card}>
                  <Text style={style.productTitle}>{item.title}</Text>
                  <Text style={[style.productPrice, { marginBottom: 25 }]}>
                    {item.price}
                  </Text>
                </View>
                <Pressable
                  style={style.delIcon}
                  android_ripple={{ color: "#fff" }}
                  onPress={() => {
                    setModalDelete({show: true, idProduct: item.id})
                  }}
                >
                  <Icon name="delete-outline" size={25} color="white" />
                </Pressable>
              </Pressable>
            );
          }}
        />
        {/* kalo ada map/perulangan, jangan pake scrollview,walaupun itu bisa, tapi peformancenya turun drastis */}
        {/* <ScrollView horizontal style={{ marginTop: 15 }}>
          {[1,2,3,4].map(()=> {
            return(
              <Pressable style={style.cardWrap} onPress={()=> {
                navigation.navigate('DetailProduct')
                // navigation.push('DetailProduct')
              }}>
              <Image source={require('../../images/prod.png')} style={{
                width: '100%',
                position: 'absolute',
                zIndex: 2,
                resizeMode: 'contain'
              }} />
              <View style={style.card}>
                  <Text style={style.productTitle}>Hazelnut Latte</Text>
                  <Text style={[style.productPrice,{ marginBottom: 25 }]}>IDR 25.000</Text>
              </View>
            </Pressable>
            )
          })}
        </ScrollView> */}
      </View>
    </View>
    <Modal 
      visible={modalDelete.show}
      transparent={true}
      animationType='fade'
    >
      <View style={{ flex: 1, backgroundColor: '#00000055', padding: '15%', paddingTop: '50%' }}>
        <View style={{ backgroundColor: '#fff', alignItems: 'center', paddingTop : 25, borderRadius: 25, overflow: 'hidden', elevation: 50,
        //SUPPORT DI ANDROID 9 (PIE)
        shadowColor:'#fe3f56'
        }}>
          <Icon size={32} color={'#fe3f56'} style={{
            borderRadius: 100,
            padding: 10,
            backgroundColor: '#fef4f5'
          }} name="trash-can-outline" />
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#333', marginBottom: 10 }}>Delete Product</Text>
          <Text>Kamu Yakin mau delete product ini?</Text>
          <View style={[commonStyle.row, {marginTop: 25}]}>
            <Pressable style={{ backgroundColor: '#f4f4f6', flex: 1, padding: 15 }}
              onPress={()=> setModalDelete({show: false, idProduct: ''})}
            >
              <Text style={{ textAlign: 'center' }}>No</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: '#fe3f56', flex: 1, padding: 15 }}
              onPress={()=> handleDelete(modalDelete.idProduct)}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Yes</Text>
            </Pressable>
            
          </View>
        </View>
      </View>
    </Modal>
  </>);
};

export default HomeScreen;
