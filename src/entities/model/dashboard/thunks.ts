import { createAsyncThunk } from "@reduxjs/toolkit";
import { collections } from "./slice";
import { FiltersEnum } from "@app/enums";
import { ChartsResponses } from "@app/types/dashboard";
import { SortOneChartProps } from "@widgets/chart-toggler";

export const fetchCharts = createAsyncThunk<ChartsResponses, FiltersEnum>(
  'dashboard/fetchDashboard',
  async (filter, thunkAPI) => {
    try {
      return collections[filter]
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const fetchChart = createAsyncThunk<{ 
  title: string;
  type: string;
  data: ChartsResponses 
}, SortOneChartProps>(
  'dashboard/fetchChart', async ({ title, type, filter }, thunkAPI) => {
    try {      
      return {
        title,
        type,
        data: collections[filter]
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);