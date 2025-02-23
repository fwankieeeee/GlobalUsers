import fetchUsers from "@/api/fetchUsers";
import { USERS_PER_PAGE } from "@/constants";
import { getName } from "country-list";
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SearchBar, Sort, UserListItem } from "..";
import CountryFilter from "../CountryFilter";
import Pagination from "../Pagination";
import { SortOptions, SortOrderOptions, UserItem } from "../types";
import styles from "./styles";

const UserList = () => {
  const [userList, setUserList] = useState<UserItem[]>([]);
  const [errorText, setErrorText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrderOptions>("desc");
  const [sortBy, setSortBy] = useState<SortOptions>("date");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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

  const filteredUserList = userList.filter((user) => {
    const { country, userName } = user;
    const searchLower = searchQuery.toLowerCase();
    const countryName = getName(country)?.toLowerCase() || "";
    const matchedSearch =
      userName.toLowerCase().includes(searchLower) ||
      countryName.includes(searchLower) ||
      country.toLowerCase().includes(searchLower);

    return matchedSearch && (!selectedCountry || country === selectedCountry);
  });

  const filteredSortedList = filteredUserList.sort((a, b) => {
    if (sortBy === "id") {
      return parseInt(a.id) - parseInt(b.id);
    }
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  const paginatedUserList = filteredSortedList.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  if (errorText) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    );
  }

  const totalPages = Math.ceil(filteredSortedList.length / USERS_PER_PAGE);

  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-gray-300 py-4 px-3">
        <SearchBar
          searchQuery={searchQuery}
          onChangeSearchQuery={handleSearchQuery}
        />
        <View className="mt-2 gap-y-[8px]">
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
        data={paginatedUserList}
        keyExtractor={(item: UserItem) => item.id}
        renderItem={({ item }: { item: UserItem }) => (
          <UserListItem item={item} />
        )}
        contentContainerClassName="px-4 pt-2"
        showsVerticalScrollIndicator={false}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </View>
  );
};

export default UserList;
