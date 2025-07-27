import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {setSelectedField} from "@entities/model/report/slice.ts";
import {useDispatch} from "react-redux";
import {getDataKey} from "@shared/lib/utils/time.ts";
import {ReportAccordionProps, ReportField} from "@app/types/report.ts";


const ReportAccordion: React.FC<ReportAccordionProps> = ({ fields, viewMode }) => {
    const dispatch = useDispatch();
    const key = getDataKey(viewMode);

    const handleViewChart = (field:ReportField) => {
        dispatch(setSelectedField(field));
    };

    return (
        <Box  sx={{ maxHeight: 600, overflowY: 'auto' }}>
            {fields.map((field:any)=> {
                const createdAt = field.createdAt
                    ? new Date(field.createdAt).toLocaleString()
                    : null;
                const updatedAt = field.updatedAt
                    ? new Date(field.updatedAt).toLocaleString()
                    : null;

                return (
                    <Accordion key={field.id} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ flexGrow: 1 }}>{field.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Total ({viewMode}):{" "}
                                {field[key]
                                    ? field[key].reduce((a: string, b:string) => a + b, 0).toFixed(2)
                                    : 0}
                            </Typography>

                            {/* Metadata */}
                            {(createdAt || updatedAt) && (
                                <Box sx={{ mb: 1 }}>
                                    {createdAt && (
                                        <Typography variant="caption" color="textSecondary">
                                            Created At: {createdAt}
                                        </Typography>
                                    )}
                                    <br />
                                    {updatedAt && (
                                        <Typography variant="caption" color="textSecondary">
                                            Updated At: {updatedAt}
                                        </Typography>
                                    )}
                                </Box>
                            )}

                            {/* View Chart Button */}
                            <Button
                                size="small"
                                variant="outlined"
                                onClick={() => handleViewChart(field)}
                            >
                                View Chart
                            </Button>

                            {/* Render Subfields */}
                            {field.fields && field.fields.length > 0 && (
                                <ReportAccordion fields={field.fields} viewMode={viewMode} />
                            )}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </Box>
    );
};

export default ReportAccordion;
