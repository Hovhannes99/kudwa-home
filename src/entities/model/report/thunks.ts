import { createAsyncThunk } from "@reduxjs/toolkit";
import report from '../../../mock/report.json'
import { IReport } from "@app/types/report";

export const fetchReport = createAsyncThunk<IReport, void>(
  'reports/fetchReport' ,async (_, thunkAPI) => {
    try {
      return report
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);