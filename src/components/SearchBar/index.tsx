import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

type SearchBarProps = {
  onChangeSearchQuery: (query: string) => void;
  searchQuery: string;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onChangeSearchQuery, searchQuery } = props;

  return (
    <>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by username or country..."
        value={searchQuery}
        onChangeText={onChangeSearchQuery}
        placeholderTextColor="#999"
      />
    </>
  );
};

export default SearchBar;
