import axios from "axios"
import { useState } from "react"
import { Pressable, TextInput, ToastAndroid, View } from "react-native"
import {Text} from '../../components/commons'
const AddProduct =()=> {
    const [formProduct, setFormProduct] = useState({
        name: '',
        price: '',
        category: ''
    })
    const handleAddProduct = ()=> {
        //form-upload (image upload)
        // TODO implements image from gallery -> tommorrow
        // const formdata = new FormData()
        
        // formdata.append(formProduct.name)
        // formdata.append(formProduct.price)
        // formdata.append(formProduct.category)
        axios({
            url: 'http://192.168.1.4:5000/api/v1/products',
            method: 'post',
            data: formProduct
        }).then(()=> {
            ToastAndroid.show('Product Sukses di Posting.', ToastAndroid.SHORT)
        }).catch(()=> {
            ToastAndroid.show('Product Gagal Di Up.', ToastAndroid.SHORT)
        })

        // console.warn(formProduct)
    }
    return(
        <View style={{ padding: 15 }}>
            <View style={{ marginBottom: 15 }}>
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
        </View>
    )
}
export default AddProduct