import React from "react";
import { View, Text } from "react-native";
import { Icon, Badge } from "native-base";
import { CartButtonStyled, QuantBadge } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import cartStore from "../../stores/CartStore";

//style

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <CartButtonStyled
          type="MaterialCommunityIcons"
          name="cart"
          onPress={() => navigation.navigate("My Cart")}
        />
      </View>
      <QuantBadge style={{ backgroundColor: "lightgreen" }}>
        <Text style={{ color: "#4c525c" }}>{cartStore.totalQuant}</Text>
      </QuantBadge>
    </>
  );
};

export default observer(CartButton);
