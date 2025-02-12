import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import fetchUsers from "@/api/fetchUsers";
import UserListItem from "../UserListItem";

type TUserItem = {
  createdAt: string;
  userName: string;
  country: string;
  id: string;
};

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetchUsers();
        setUserList(response);
      } catch (error) {
        setErrorText("Error fetching user list");
      }
    };
    fetchUserList();
  }, []);

  if (errorText) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        keyExtractor={(item: TUserItem) => item.id}
        renderItem={({ item }: { item: TUserItem }) => (
          <UserListItem item={item} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserList;
