import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import PageNumbers from "./PageNumbers";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text style={styles.pageButtonText}>←</Text>
      </TouchableOpacity>
      <PageNumbers
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <TouchableOpacity
        style={[
          styles.pageButton,
          currentPage === totalPages && styles.disabledButton,
        ]}
        onPress={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text style={styles.pageButtonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
