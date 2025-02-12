import { StyleSheet } from "react-native";

export default StyleSheet.create({
  countryFilter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  buttonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  activeFilter: {
    backgroundColor: "#007AFF",
  },
  filterFlag: {
    marginRight: 6,
    borderRadius: 2,
  },
})