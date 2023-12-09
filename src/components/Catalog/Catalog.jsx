import React, {useState } from 'react';
import makes from "./makes.json";
import Select from 'react-select';
import {
  selectAdverts,
} from "../../redux/selectors";
import { useSelector } from "react-redux";

const Catalog = () => {
  const [selectPrice, setSelectPrice] = useState('');
  const [fromMile, setFromMile] = useState('');
  const [toMile, setToMile] = useState('');
  const [selectFilter, setSelectFilter] = useState('');
  // const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  // const allAdverts = useSelector(selectAllAdverts);

  // useEffect(() => {
  //   if (adverts.length === 0) {
  //     dispatch(setAllAdverts());
  //     dispatch(setAdverts(page));
  //   }
  // }, [adverts.length, dispatch, page]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({fromMile, toMile, selectFilter, selectPrice})
  }

  const handleInputChange = (e) => {
    const { name } = e.currentTarget;
    const value = Math.max(e.target.value, 0);
    name === "from" ? setFromMile(value) : setToMile(value);
  };

  const optionsMakeFilter = makes.map((make) => ({ value: make, label: make }));

  const generatePrice = () => {
    const minRate = 10;
    const maxRate = 300;
    const step = 10;
    
    const rates = [];
    for (let rate = minRate; rate <= maxRate; rate += step) {
      rates.push(rate);
    }

    return rates;
  };

  const optionsMakePrice = generatePrice().map(rate => ({ value: rate, label: rate }));

  const placeholderText = "Enter the text";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="makeFilter">Car brand</label>
        <Select
          id="makeFilter"
          name="makeFilter"
          options={optionsMakeFilter}
          isSearchable
          placeholder={placeholderText}
          onChange={(e) => setSelectFilter(e ? e.value : "")}
        />
        <label htmlFor="makePrice">Price/ 1 hour</label>
        <Select
          id="makePrice"
          name="makePrice"
          options={optionsMakePrice}
          isSearchable={false}
          placeholder='To $'
          value={
            selectPrice !== ''
              ? {
                  value: selectPrice,
                  label: `To ${selectPrice}$`,
                }
              : ''
          }
          onChange={(e) => setSelectPrice(e ? e.value : "")}
        />
        <label htmlFor="carMileage">Сar mileage / km</label>
        <span className="input-prefix">From</span>
        <input
          id="carMileage"
          type="number"
          name="from"
          onChange={handleInputChange}
        />
        <span className="input-prefix">To</span>
        <input
          id="carMileage"
          type="number"
          name="to"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <ul>
          {(adverts).map((advert) => {
            return <li key={advert.id} advert={advert}/>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
