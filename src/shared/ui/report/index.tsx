import { useSelector, useDispatch } from "react-redux";
import { setViewMode } from "@entities/model/report/slice.ts";
import { ToggleButton, ToggleButtonGroup, Box, Typography, Paper } from "@mui/material";
import ReportAccordion from "../../../widgets/accordions/reportAccordion.tsx";
import ReportChart from "../../../widgets/charts/ReportChart/index.tsx";
import {ViewMode} from "@app/types/report.ts";
import {RootState} from "@app/store/store.ts";

const ReportContent = () => {
    const dispatch = useDispatch();
    const { data, viewMode } = useSelector((state: RootState) => state.report);

    const handleViewChange = (event:any, newView: ViewMode) => {
        event.preventDefault()
        if (newView) dispatch(setViewMode(newView));
    };

    const createdAt = data.createdAt ? new Date(data.createdAt).toLocaleString() : "N/A";
    const updatedAt = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : "N/A";

    const hasData = data && Array.isArray(data.profitnLoss) && data.profitnLoss.length > 0;

    return (
        <Box>
            <Box >
                <Typography variant="h6">Report Metadata</Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Created At:</strong> {createdAt}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Updated At:</strong> {updatedAt}
                </Typography>
            </Box>
            {!hasData ? (
                <Paper sx={{ p: 2, textAlign: "center", backgroundColor: "#f8f8f8" }}>
                    <Typography variant="h6" color="textSecondary">
                        No data available for this report.
                    </Typography>
                </Paper>
            ) : (
                <>
                    {/* Toggle Buttons */}
                    <ToggleButtonGroup
                        value={viewMode}
                        exclusive
                        onChange={handleViewChange}
                        sx={{ mb: 2 }}
                    >
                        <ToggleButton value="monthly">Monthly</ToggleButton>
                        <ToggleButton value="quarterly">Quarterly</ToggleButton>
                        <ToggleButton value="yearly">Yearly</ToggleButton>
                    </ToggleButtonGroup>

                    {/* Side-by-Side Layout */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                        }}
                    >
                        {/* Accordion Section */}
                        <Box sx={{ flex: "0 0 40%", minWidth: "500" }}>
                            <ReportAccordion fields={data.profitnLoss} viewMode={viewMode} />
                        </Box>

                            <ReportChart fields={data.profitnLoss} viewMode={viewMode} />
                    </Box>
                </>
            )}
        </Box>
    );
};
export default ReportContent;
