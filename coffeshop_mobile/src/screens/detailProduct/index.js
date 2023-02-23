import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import commonStyle from '../../styles/commonStyle'
const DetailProductScreen = ()=> {
  return(
    <View style={commonStyle.bg}>
      <Text style={[commonStyle.mlBase]}>A good coffee is{`\n`}a good day</Text>
      <View>
        <Text style={[commonStyle.mlBase]}>Detail Product</Text>

      </View>
    </View>
  )
}

export default DetailProductScreen