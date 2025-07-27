import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import dashboardSlice from '@entities/model/dashboard/slice';
import reportSlice from '@entities/model/report/slice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    report: reportSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // ← Add logger or any custom middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
