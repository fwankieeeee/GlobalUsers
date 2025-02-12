import fetchUsers from "@/api/fetchUsers";
import { getName } from "country-list";
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SearchBar, Sort, UserListItem } from "..";
import CountryFilter from "../CountryFilter";
import { SortOptions, SortOrderOptions, UserItem } from "../types";
import styles from "./styles";

const UserList = () => {
  const [userList, setUserList] = useState<UserItem[]>([]);
  const [errorText, setErrorText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrderOptions>("desc");
  const [sortBy, setSortBy] = useState<SortOptions>("date");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const handlePressSortBy = () => {
    setSortBy("date");
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  const handlePressResetSort = () => {
    setSortBy("id");
    setSortOrder("asc");
  };

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
  };

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

  const countries = useMemo(() => {
    return [
      ...new Set(
        userList.map((item: UserItem) => {
          return item.country;
        })
      ),
    ].sort();
  }, [userList]);

  const filteredUserList = useMemo(() => {
    const filteredList = userList.filter((user) => {
      const { country, userName } = user;
      const searchLower = searchQuery.toLowerCase();
      const countryName = getName(country)?.toLowerCase() || "";
      const matchedSearch =
        userName.toLowerCase().includes(searchLower) ||
        countryName.includes(searchLower) ||
        country.toLowerCase().includes(searchLower);

      return matchedSearch && (!selectedCountry || country === selectedCountry);
    });

    return filteredList;
  }, [userList.length, sortBy, sortOrder, selectedCountry, searchQuery]);

  const filteredSortedList = useMemo(() => {
    const sortedList = filteredUserList.sort((a, b) => {
      if (sortBy === "id") {
        return parseInt(a.id) - parseInt(b.id);
      }
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });
    return sortedList;
  }, [filteredUserList]);

  if (errorText) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchSortFilterContainer}>
        <SearchBar
          searchQuery={searchQuery}
          onChangeSearchQuery={handleSearchQuery}
        />
        <View style={styles.filterContainer}>
          <Sort
            sortBy={sortBy}
            sortOrder={sortOrder}
            onPressResetSort={handlePressResetSort}
            onPressSortBy={handlePressSortBy}
          />
          <CountryFilter
            countries={countries}
            selectedCountry={selectedCountry}
            onPressSelectedCountry={handleSelectCountry}
          />
        </View>
      </View>
      <FlatList
        data={filteredSortedList}
        keyExtractor={(item: UserItem) => item.id}
        renderItem={({ item }: { item: UserItem }) => (
          <UserListItem item={item} />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UserList;
