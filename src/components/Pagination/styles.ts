import { StyleSheet } from "react-native";

export default StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    gap: 8,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  pageButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
    minWidth: 40,
    alignItems: "center",
  },
  pageButtonText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  disabledButton: {
    opacity: 0.5,
  },
  activePageButton: {
    backgroundColor: "#007AFF",
  },
  activePageButtonText: {
    color: "white",
  },
});
