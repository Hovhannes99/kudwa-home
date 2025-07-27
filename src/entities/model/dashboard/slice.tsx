import { createSlice } from '@reduxjs/toolkit';
import { Charts } from '@app/types/dashboard';
import { fetchChart, fetchCharts } from './thunks';
import monthly from '../../../mock/monthly.json';
import quarterly from '../../../mock/quarterly.json';
import yearly from '../../../mock/yearly.json';
import { FiltersEnum } from '@app/enums';
import { prepareChartData, prepareChartsData } from './utils';

export type SpecialType = Record<Partial<keyof Charts>, any>

interface DashboardState {
  charts: SpecialType | null
  filter: FiltersEnum
  dateArray: string[]
  isLoading: boolean
  errorMessage: string
}

const initialState: DashboardState = {
  charts: null,
  filter: FiltersEnum.monthly,
  dateArray: [],
  isLoading: false,
  errorMessage: ''
};

export const collections = {
  monthly,
  quarterly,
  yearly,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateFilter(state, payload){
      state.filter = payload.payload
    }
  },
  extraReducers: (builder) => {
    // loading
    builder
      .addCase(fetchCharts.pending, (state) => {
        state.charts = null;
        state.isLoading = true
        state.errorMessage = ''
      })
      .addCase(fetchCharts.fulfilled, (state, action) => {
        const result = prepareChartsData(action.payload)

        state.charts = result
        state.dateArray = action.payload.mainDashboard.dateArray
        state.isLoading = false
        state.errorMessage = ''
      })
      .addCase(fetchCharts.rejected, (state) => {
        state.charts = null
        state.isLoading = false
        state.errorMessage = 'Something went wrong. Our developers already working on it'
      })
      .addCase(fetchChart.fulfilled, (state, action) => {
        const { title, data, type } = action.payload
        const { keyInObject, transformed } = prepareChartData(title, data)
              
        if(state.charts !== null && keyInObject in state.charts) {
          state.charts = {
            ...state.charts,
            [keyInObject]: {
              type, 
              value: [...transformed]
            }
          }
        }
      })
      .addCase(fetchChart.rejected, (state) => {
        state.charts = null
      });
  },
});

export const { updateFilter } = dashboardSlice.actions;
export default dashboardSlice.reducer;
