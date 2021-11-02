import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import CarItem from "../CarItem/index";

import styles from "./Styles";
import carsData from "./cars";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={carsData}
        renderItem={({ item }) => <CarItem carData={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarList;
