import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SortOptions, SortOrderOptions } from "../types";
import styles from "./styles";

type SortProps = {
  sortOrder: SortOrderOptions;
  sortBy: SortOptions;
  onPressSortBy: () => void;
  onPressResetSort: () => void;
};

const Sort: React.FC<SortProps> = (props) => {
  const { sortOrder, sortBy, onPressSortBy, onPressResetSort } = props;

  return (
    <View style={styles.sortButtons}>
      <TouchableOpacity style={styles.sortButton} onPress={onPressSortBy}>
        <Text
          style={[
            styles.buttonText,
            sortBy === "date" && styles.activeButtonText,
          ]}
        >
          Date {sortOrder === "desc" ? "↓" : "↑"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sortButton} onPress={onPressResetSort}>
        <Text
          style={[
            styles.buttonText,
            sortBy === "id" && styles.activeButtonText,
          ]}
        >
          Reset ID ↑
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sort;
