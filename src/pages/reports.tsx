import { fetchReport } from "@entities/model/report/thunks";
import { useAppDispatch } from "@shared/lib/hook/reduxHooks";
import ReportContent from "@shared/ui/report";
import { useEffect } from "react";

const Reports = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchReport());
  }, []);

  return (
    <ReportContent />
  );
}
 
export default Reports;
