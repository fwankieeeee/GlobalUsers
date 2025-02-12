import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import CountryFlag from "react-native-country-flag";
import { getName } from "country-list";

dayjs.extend(localizedFormat);

type UserListItemProps = {
  item: {
    createdAt: string;
    userName: string;
    country: string;
    id: string;
  };
};

const UserListItem: React.FC<UserListItemProps> = (props) => {
  const {
    item: { id, userName, country, createdAt },
  } = props;
  const countryName = getName(country) || country;
  const formattedDate = dayjs(createdAt).format("LLLL");
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{id}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{userName}</Text>
          <View style={styles.countryContainer}>
            <CountryFlag isoCode={country} size={16} style={styles.flag} />
            <Text style={styles.country}>{countryName}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
};

export default UserListItem;
