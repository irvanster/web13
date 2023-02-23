import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import commonStyle from '../../styles/commonStyle'
import style from './style'
const HomeScreen = ({navigation})=> {
  return(
    <View style={commonStyle.bg}>
      <Text style={[commonStyle.mlBase, style.title]}>A good coffee is{`\n`}a good day</Text>
      <View>
        <Text style={[commonStyle.mlBase, style.sectionTitle]}>Favorite Products</Text>
        <FlatList 
          horizontal
          data={[1,2,3,4,5]}
          renderItem={()=> {
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
  )
}

export default HomeScreen