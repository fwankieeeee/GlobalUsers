type CountryItemProps = {
  item: string;
  selectedCountry: string;
  onPressSelectedCountry: (country: string) => void;
};

type CountryFilterProps = {
  countries: string[];
  selectedCountry: string;
  onPressSelectedCountry: (country: string) => void;
};

export type { CountryItemProps, CountryFilterProps };
