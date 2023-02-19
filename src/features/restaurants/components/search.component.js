import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const isIos = Platform.OS === "ios";

const SearchbarContainer = styled.View`
  padding-top: ${isIos ? (props) => props.theme.space[3] : 0};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouriteToggled, onFavouriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchbarContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchbarContainer>
  );
};
