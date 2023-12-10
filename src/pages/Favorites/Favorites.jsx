import React from "react";
import {
  AdvertsList,
  NoMatching,
} from "../../components/Catalog/Catalog.styled";
import AdvertItem from "../../components/AdvertItem/AdvertItem";
import { AdvertsContainer, FavouritesContainer } from "./Favorites.styled";
import { useSelector} from "react-redux";
import { selectFavorites } from "../../redux/selectors";

function Favorites() {
  const favorites = useSelector(selectFavorites);


  return (
    <FavouritesContainer className="container">
      <AdvertsContainer>
        {favorites.length > 0 ? (
          <AdvertsList>
            {favorites.map((advert) => (
              <AdvertItem key={advert.id} advert={advert} />
            ))}
          </AdvertsList>
        ) : (
          <NoMatching>No matching favorites found</NoMatching>
        )}
      </AdvertsContainer>
    </FavouritesContainer>
  );
}

export default Favorites;
