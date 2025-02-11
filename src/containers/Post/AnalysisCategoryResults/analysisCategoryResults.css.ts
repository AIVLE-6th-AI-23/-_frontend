import { style } from "@vanilla-extract/css";

export const styles = {
    container: style({
        padding: "16px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),
    title: style({
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "16px",
    }),
    list: style({
        listStyleType: "none",
        padding: "0",
        margin: "0",
    }),
    listItem: style({
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        marginBottom: "12px",
    }),
    categoryName: style({
        fontSize: "1rem",
        fontWeight: "700",
    }),
    score: style({
        color: "#444",
    }),
    scoreValue: style({
        fontWeight: "600",
    }),
    description: style({
        fontSize: "0.875rem",
        color: "#666",
    }),
    severity: style({
        fontSize: "0.875rem",
        fontWeight: "500",
        marginTop: "8px",
    }),
    severityHigh: style({
        color: "#d32f2f",
    }),
    severityMedium: style({
        color: "#f57c00",
    }),
    severityLow: style({
        color: "#388e3c",
    }),
};
