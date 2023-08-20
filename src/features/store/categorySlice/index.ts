// import { storeApi } from "@/api/storeApi";
import { Category } from "@/models/Category";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  categories: Category[];
}

const initialState: InitialState = {
  categories: [{ name: "All", selected: true }],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    loadCategory: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((category)=>{
        state.categories.push({name: category,selected: false})
      })
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

export default categorySlice;

export const { updateCategory, loadCategory, resetCategory } =
  categorySlice.actions;
