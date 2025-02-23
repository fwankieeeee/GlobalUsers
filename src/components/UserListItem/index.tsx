import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import CountryFlag from "react-native-country-flag";
import { getName } from "country-list";
import { UserListItemProps } from "./types";

dayjs.extend(localizedFormat);

const UserListItem: React.FC<UserListItemProps> = (props) => {
  const {
    item: { id, userName, country, createdAt },
  } = props;
  const countryName = getName(country) || country;
  const formattedDate = dayjs(createdAt).format("LLLL");
  return (
    <View
      style={styles.shadowCard}
      className="bg-white rounded-xl p-4 mb-[16px]"
    >
      <View className="flex-row items-center gap-[12px]">
        <View className="justify-center items-center rounded-full bg-purple-100 size-[40px]">
          <Text className="text-purple-700 font-medium text-lg">{id}</Text>
        </View>
        <View className="mb-4">
          <Text className="text-slate-900 font-medium text-xl">{userName}</Text>
          <View className="flex-row items-center">
            <CountryFlag isoCode={country} size={16} style={styles.flag} />
            <Text className="text-lg text-slate-500">{countryName}</Text>
          </View>
        </View>
      </View>
      <Text className="text-sm text-slate-500">{formattedDate}</Text>
    </View>
  );
};

export default UserListItem;
