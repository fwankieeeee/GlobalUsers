type SortOptions = "date" | "id";

type SortOrderOptions = "asc" | "desc";

type UserItem = {
  createdAt: string;
  userName: string;
  country: string;
  id: string;
};

export type {
  SortOptions,
  SortOrderOptions,
  UserItem
};
