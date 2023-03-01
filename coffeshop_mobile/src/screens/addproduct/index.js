import axios from "axios"
import { useState } from "react"
import { Image, Pressable, ScrollView, TextInput, ToastAndroid, View } from "react-native"
import {Text} from '../../components/commons'
import * as ImagePicker from 'expo-image-picker';
const AddProduct =()=> {
    const [formProduct, setFormProduct] = useState({
        name: '',
        price: '',
        category: '',
        images: []
    })
    const handleAddProduct = ()=> {
        // alert('wok')
        // form-upload (image upload)
        // TODO implements image from gallery -> tommorrow
        const formdata = new FormData()
        
        formdata.append('name',formProduct.name)
        formdata.append('price', formProduct.price)
        formdata.append('category',formProduct.category)
        // console.log({
        //     uri: formProduct.images[0].uri,
        //     name: `product-${Date.now()}`,
        //     type: 'image/jpeg'
        // })
        // formdata.append("img[]", {
        //     uri: formProduct.images[0].uri,
        //     name: `product-${Date.now()}`,
        //     type: 'image/jpeg'
        // });
        // formdata.append('images', formProduct.images)
         formProduct.images.length != 0 &&  formProduct.images.map(({ uri }) => {
            formdata.append("img", {
                uri: formProduct.images[0].uri,
                name: `product-${Date.now()}.jpg`,
                type: 'image/jpeg'
            });
        });
        console.log('loading...')
        axios({
            url: 'http://192.168.100.121:5000/api/v1/products',
            method: 'post',
            data: formProduct,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res)=> {
            console.log(JSON.stringify(res.data))
            ToastAndroid.show('Product Sukses di Posting.', ToastAndroid.SHORT)
        console.log('berhasil...')

        }).catch((err)=> {
            console.log(JSON.stringify(err.data))
            ToastAndroid.show('Product Gagal Di Up.', ToastAndroid.SHORT)
        console.log('gagal...')

        })

        // console.warn(formProduct)
    }

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setFormProduct({...formProduct, images: result.assets});
      }
    };
    return(
        <ScrollView style={{ padding: 15 }}>
            <View style={{ marginBottom: 15 }}>
                <Pressable onPress={pickImage} 
                style={{ backgroundColor: "#f0f0f0", borderColor: '#999', borderWidth: 1 ,height: 300 }}>
                    <Text>add image</Text>
                    {formProduct.images.length != 0  && (
                        <Image source={{ uri: formProduct.images[0].uri }} style={{ width: '100%', height: 300 }} />

                    )}
                </Pressable>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name</Text>
                <TextInput 
                    onChangeText={(text)=> setFormProduct({...formProduct, name: text}) } 
                    placeholder="Input name of product"
                    style={{
                        padding: 15,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderColor: '#c4c4c4',
                        paddingLeft: 0 // padding left hilangin default rn
                    }}
                    selectionColor={'brown'}
                    // placeholderTextColor='#f0f0f0'
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Price</Text>
                <TextInput
                    onChangeText={(text)=> setFormProduct({...formProduct, price: text}) } 
                    placeholder="Input price of product"
                    style={{
                        padding: 15,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderColor: '#c4c4c4',
                        paddingLeft: 0 // padding left hilangin default rn
                    }}
                    selectionColor={'brown'}
                    // placeholderTextColor='#f0f0f0'
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Category</Text>
                <TextInput 
                    onChangeText={(text)=> setFormProduct({...formProduct, category: text}) } 
                    placeholder="Input category of product"
                    style={{
                        padding: 15,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderColor: '#c4c4c4',
                        paddingLeft: 0 // padding left hilangin default rn
                    }}
                    selectionColor={'brown'}
                    // placeholderTextColor='#f0f0f0'
                />
            </View>
            <Pressable onPress={handleAddProduct}
                style={{ 
                    backgroundColor:'#6A4029',
                    padding: 22,
                    borderRadius: 20
                 }}
            >
                {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
                <Text color="#F6F6F9" align={'center'}>Save Product</Text>
            </Pressable>
        </ScrollView>
    )
}
export default AddProduct