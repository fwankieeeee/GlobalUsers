type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type PageNumberProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type { PaginationProps, PageNumberProps };
