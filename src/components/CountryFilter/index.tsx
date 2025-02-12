import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CountryItem from "./CountryItem";
import styles from "./styles";

type CountryFilterProps = {
  countries: string[];
  selectedCountry: string;
  onPressSelectedCountry: (country: string) => void;
};

const CountryFilter: React.FC<CountryFilterProps> = (props) => {
  const { countries, selectedCountry, onPressSelectedCountry } = props;

  const handleSelectedCountry = (country: string) => {
    onPressSelectedCountry(country);
  };

  return (
    <View style={styles.countryFilter}>
      <TouchableOpacity
        style={[styles.filterButton, !selectedCountry && styles.activeFilter]}
        onPress={() => handleSelectedCountry("")}
      >
        <Text style={styles.buttonText}>All</Text>
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
