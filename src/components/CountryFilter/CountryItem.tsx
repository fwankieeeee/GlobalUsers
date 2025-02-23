import React from "react";
import { Text, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
import styles from "./styles";
import { CountryItemProps } from "./types";

const CountryItem: React.FC<CountryItemProps> = (props) => {
  const { item, selectedCountry, onPressSelectedCountry } = props;

  return (
    <TouchableOpacity
      className={`flex-row items-center mr-[8px] rounded-full py-[6px] px-3 ${
        selectedCountry === item ? "bg-blue-400" : "bg-gray-200"
      }`}
      onPress={() => onPressSelectedCountry(item)}
    >
      <CountryFlag isoCode={item} size={16} style={styles.filterFlag} />
      <Text className="text-sm font-medium text-gray-800">{item}</Text>
    </TouchableOpacity>
  );
};

export default CountryItem;
