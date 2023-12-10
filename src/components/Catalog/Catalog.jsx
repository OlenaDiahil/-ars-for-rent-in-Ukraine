import { useEffect, useState } from "react";
import { AdvertsList, NoMatching } from "./Catalog.styled";
import AdvertItem from "../AdvertItem/AdvertItem";
import ButtonLoad from "../ButtonLoad/ButtonLoad";
import { useDispatch, useSelector } from "react-redux";
import { onNextPage } from "../../redux/catalog/catalogSlice";
import { setAdverts, setAllAdverts } from "../../redux/catalog/operations";
import Loader from "../Loader/Loader";
import {
  selectAdverts,
  selectAllAdverts,
  selectFilters,
  selectIsLoading,
  selectPage,
} from "../../redux/selectors";

function Catalog() {
  const [isBnt, setIsBtn] = useState(true);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const filters = useSelector(selectFilters);
  const allAdverts = useSelector(selectAllAdverts);

  const isFilterOn = Boolean(
    filters.selectedMake ||
      filters.selectedPrice ||
      filters.minMileage ||
      filters.maxMileage
  );

  useEffect(() => {
    if (adverts.length === 0) {
      dispatch(setAdverts(page));
      dispatch(setAllAdverts());
    }
  }, [adverts.length, dispatch, page, isFilterOn]);

  useEffect(() => {
    if (page + 1 > 4 || isFilterOn) {
      setIsBtn(false);
    } else if (!isFilterOn) {
      setIsBtn(true);
    }
  }, [isFilterOn, page]);

  const onFindMore = () => {
    if (adverts.length < allAdverts.length) {
      dispatch(onNextPage());
      dispatch(setAdverts(page + 1));
    }
  };

  const filteredAdverts = allAdverts.filter((adverts) => {
    if (filters.selectedMake && adverts.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(adverts.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && adverts.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && adverts.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <>
      {adverts && (
        <>
          {filteredAdverts.length > 0 ? (
            <AdvertsList>
              {(isFilterOn ? filteredAdverts : adverts).map((advert, index) => {
                return <AdvertItem key={index} advert={advert} />;
              })}
            </AdvertsList>
          ) : (
            <>
              {!isLoading && (
                <NoMatching>Sorry, no matching adverts found</NoMatching>
              )}
            </>
          )}
          {isLoading ? (
            <Loader />
          ) : (
            <>{isBnt && <ButtonLoad onFindMore={onFindMore} />}</>
          )}
        </>
      )}
    </>
  );
}

export default Catalog;
