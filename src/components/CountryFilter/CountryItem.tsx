import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import CountryFlag from 'react-native-country-flag'
import styles from './styles'

type CountryItemProps = {
  item: string;
  selectedCountry: string;
  onPressSelectedCountry: (country: string) => void;
}

const CountryItem: React.FC<CountryItemProps> = (props) => {
  const { item, selectedCountry, onPressSelectedCountry} = props;
  return (
    <TouchableOpacity
      style={[
        styles.filterButton,
        selectedCountry === item && styles.activeFilter,
      ]}
      onPress={() => onPressSelectedCountry(item)}
    >
      <CountryFlag isoCode={item} size={16} style={styles.filterFlag} />
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  )
}

export default CountryItem
