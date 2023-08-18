// import { storeApi } from "@/api/storeApi";
import { Category } from "@/models/Category";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  categories: Category[];
}

const initialState: InitialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    loadCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    updateCategory: (state, action: PayloadAction<string>) => {
      state.categories.map((category) => {
        if (category.name === action.payload) {
          category.selected = true;
        } else {
          category.selected = false;
        }
      });
    },
    resetCategory: (state) => {
      state.categories.map((category) => {
        if (category.name === "All") {
          category.selected = true;
        } else {
          category.selected = false;
        }
      });
    },
  },
});

export default categorySlice.reducer;

export const { updateCategory, loadCategory ,resetCategory} = categorySlice.actions;
