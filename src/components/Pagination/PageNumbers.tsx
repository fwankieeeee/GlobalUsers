import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { PageNumberProps } from "./types";

const PageNumbers: React.FC<PageNumberProps> = (props) => {
  const { currentPage, totalPages, onPageChange } = props;
  // Always show first page
  let pages: (string | number)[] = [1];

  if (currentPage > 3) {
    pages = [...pages, "..."];
  }
  // Show current page and surrounding pages
  if (currentPage !== 1 && currentPage !== totalPages) {
    pages = [...pages, currentPage];
  }
  // Show next page if not last
  if (currentPage + 1 < totalPages) {
    pages = [...pages, currentPage + 1];
  }

  if (currentPage + 2 < totalPages) {
    pages = [...pages, "..."];
  }
  // Always show last page
  if (totalPages > 1) {
    pages = [...pages, totalPages];
  }

  return pages.map((page, index) => {
    if (page === "...") {
      return (
        <Text
          key={`ellipsis-${index}`}
          className="text-sm text-slate-700 font-bold px-2"
        >
          {page}
        </Text>
      );
    }

    return (
      <TouchableOpacity
        key={index}
        className={`items-center rounded-full py-2 px-3 bg-gray-200 ${
          currentPage === page && "bg-blue-400"
        }`}
        onPress={() => onPageChange(page as number)}
      >
        <Text
          className={`text-sm text-slate-700 font-bold ${
            currentPage === page && "text-white"
          }`}
        >
          {page}
        </Text>
      </TouchableOpacity>
    );
  });
};

export default PageNumbers;
