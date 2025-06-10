import SearchIcon from "@/assets/icons/search";
import { Icon, InputWrapper, StyledInput } from "./styles";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <Icon>
        <SearchIcon />
      </Icon>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default SearchInput;
