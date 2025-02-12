import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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
      {/* left button */}
      <TouchableOpacity
        style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
        onPress={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text style={styles.pageButtonText}>←</Text>
      </TouchableOpacity>
      {[...Array(totalPages)].map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.pageButton,
            currentPage === index + 1 && styles.activePageButton,
          ]}
          onPress={() => handlePageChange(index + 1)}
        >
          <Text
            style={[
              styles.pageButtonText,
              currentPage === index + 1 && styles.activePageButtonText,
            ]}
          >
            {index + 1}
          </Text>
        </TouchableOpacity>
      ))}
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
