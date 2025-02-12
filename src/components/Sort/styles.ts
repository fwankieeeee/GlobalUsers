import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sortButtons: {
    flexDirection: "row",
    gap: 8,
  },
  sortButton: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  activeButtonText: {
    color: '#007AFF',
  },
});
