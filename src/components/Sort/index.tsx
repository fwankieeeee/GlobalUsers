import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SortProps } from "./types";

const Sort: React.FC<SortProps> = (props) => {
  const { sortOrder, sortBy, onPressSortBy, onPressResetSort } = props;

  return (
    <View className="flex-row gap-x-2">
      <TouchableOpacity
        className={`rounded-full py-[6px] px-3 ${
          sortBy === "date" ? "bg-blue-400" : "bg-gray-100"
        }`}
        onPress={onPressSortBy}
      >
        <Text
          className="text-gray-800"
        >
          Date {sortOrder === "desc" ? "↓" : "↑"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`rounded-full py-[6px] px-3 ${
          sortBy === "id" ? "bg-blue-400" : "bg-gray-100"
        }`}
        onPress={onPressResetSort}
      >
        <Text className="text-gray-800">Reset ID ↑</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sort;
