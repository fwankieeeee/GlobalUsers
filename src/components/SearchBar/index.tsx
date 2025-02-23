import React from "react";
import { TextInput, View } from "react-native";
import { SearchBarProps } from "./types";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onChangeSearchQuery, searchQuery } = props;

  return (
    <View className="bg-gray-100 text-gray-800 px-4 py-4 rounded-2xl text-base">
      <TextInput
        placeholder="Search by username or country..."
        value={searchQuery}
        onChangeText={onChangeSearchQuery}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default SearchBar;
