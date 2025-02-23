import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import CountryItem from "./CountryItem";
import { CountryFilterProps } from "./types";

const CountryFilter: React.FC<CountryFilterProps> = (props) => {
  const { countries, selectedCountry, onPressSelectedCountry } = props;

  const handleSelectedCountry = (country: string) => {
    onPressSelectedCountry(country);
  };

  return (
    <View className="flex-row items-center gap-[8px]">
      <TouchableOpacity
        className={`rounded-full py-[6px] px-3 ${
          selectedCountry ? "bg-gray-100" : "bg-blue-400"
        }`}
        onPress={() => handleSelectedCountry("")}
      >
        <Text className="text-sm font-medium text-gray-800">All</Text>
      </TouchableOpacity>
      <FlatList
        data={countries}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CountryItem
            item={item}
            onPressSelectedCountry={handleSelectedCountry}
            selectedCountry={selectedCountry}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default CountryFilter;
