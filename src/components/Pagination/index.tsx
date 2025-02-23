import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PageNumbers from "./PageNumbers";
import { PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <View className="flex-row justify-center items-center bg-white py-4 gap-[8px]">
      <TouchableOpacity
        className={`items-center rounded-full py-2 px-3 bg-gray-200 ${
          currentPage === 1 && "opacity-25"
        }`}
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text className="text-sm text-slate-700 font-bold">←</Text>
      </TouchableOpacity>
      <PageNumbers
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <TouchableOpacity
        className={`items-center rounded-full py-2 px-3 bg-gray-200 ${
          currentPage === totalPages && "opacity-25"
        }`}
        onPress={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text className="text-sm text-slate-700 font-bold">→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
