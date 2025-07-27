import { createSlice } from '@reduxjs/toolkit';
import { ReportState, ReportData} from '@app/types/report';
import reportData from "../../../mock/report.json";


const initialState: ReportState = {
  data: reportData.reportResult as ReportData,
  viewMode: "monthly",
  selectedField: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    setSelectedField: (state, action) => {
      state.selectedField = action.payload;
    },
  },
});

export const { setViewMode, setSelectedField } = reportSlice.actions;
export default reportSlice.reducer;
