import { Dimensions, StyleSheet } from "react-native"
const style = StyleSheet.create({
  title: {
    fontSize: 34,
    color: "#333",
    fontWeight: "700",
    marginTop: "15%",
  },
  productTitle: {
    fontWeight: "900",
    fontSize: 22.29,
    color: "#333",
  },
  productPrice: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "700",
  },
  cardWrap: {
    width: Dimensions.get("window").width / 1.5,
    // width: '66.66%',
    // marginLeft: 15,
    padding: 15,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    height: 250,
    elevation: 7,
    width: "100%",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default style;
