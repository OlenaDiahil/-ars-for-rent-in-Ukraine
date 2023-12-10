import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6571b945d61ba6fcc0135cfd.mockapi.io";

export const setAdverts = createAsyncThunk(
  "catalog/fetchAdverts",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/advert", {
        params: { page: page, limit: 12 },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAllAdverts = createAsyncThunk(
  "catalog/fetchAllAdverts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/advert");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
