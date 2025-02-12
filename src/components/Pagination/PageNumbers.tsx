import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type PageNumberProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PageNumbers: React.FC<PageNumberProps> = (props) => {
  const { currentPage, totalPages, onPageChange } = props;
  // Always show first page
  let pages: (string | number)[] = [1];
    
  if (currentPage > 3) {
    pages = [
      ...pages,
     '...',
    ]
  }
  // Show current page and surrounding pages
  if (currentPage !== 1 && currentPage !== totalPages) {
    pages = [
      ...pages,
      currentPage,
    ]
  }
  // Show next page if not last
  if (currentPage + 1 < totalPages) {
    pages = [
     ...pages,
      currentPage + 1,
    ]
  }
  
  if (currentPage + 2 < totalPages) {
    pages = [
      ...pages,
      '...'
    ]
  }
  // Always show last page
  if (totalPages > 1) {
    pages = [
     ...pages,
      totalPages,
    ]
  }
  
  return pages.map((page, index) => {
    if (page === '...') {
      return (
        <Text key={`ellipsis-${index}`} style={[styles.pageButtonText, styles.ellipsis]}>
          {page}
        </Text>
      );
    }
    
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.pageButton,
          currentPage === page && styles.activePageButton,
        ]}
        onPress={() => onPageChange(page as number)}
      >
        <Text
          style={[
            styles.pageButtonText,
            currentPage === page && styles.activePageButtonText,
          ]}
        >
          {page}
        </Text>
      </TouchableOpacity>
    );
  })
}

export default PageNumbers
