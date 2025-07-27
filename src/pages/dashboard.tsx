import { useAppDispatch, useAppSelector } from '@shared/lib/hook/reduxHooks';
import DashboardContent from '@shared/ui/dashboard';
import { useEffect } from 'react';
import { fetchCharts } from '@entities/model/dashboard/thunks';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((data) => data.dashboard.filter)

  useEffect(() => {
    dispatch(fetchCharts(filter));
  }, [filter]);

  return (
    <DashboardContent />
  )
}

export default Dashboard 
