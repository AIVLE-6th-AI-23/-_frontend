import React from "react";
import { styles } from "./analysisCategoryResults.css";
import { analysisCategoryResultResponseDto } from "@/types/types";


interface AnalysisCategoryResultsProps {
    data: analysisCategoryResultResponseDto| undefined;
}

const AnalysisCategoryResults: React.FC<AnalysisCategoryResultsProps> = ({ data }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>분석 카테고리 결과</h2>
            <ul className={styles.list}>
                {data?.map((result) => (
                    <li key={result.resultId} className={styles.listItem}>
                        <h3 className={styles.categoryName}>{result.categoryName}</h3>
                        <p className={styles.score}>
                            점수: <span className={styles.scoreValue}>{result.categoryScore}</span>
                        </p>
                        <p className={styles.description}>{result.description}</p>
                        <p className={`${styles.severity} ${getSeverityClass(result.severityLevel)}`}>
                            심각도: {result.severityLevel}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const getSeverityClass = (level: number) => {
    if (level >= 8) return styles.severityHigh;
    if (level >= 5) return styles.severityMedium;
    return styles.severityLow;
};

export default AnalysisCategoryResults;
