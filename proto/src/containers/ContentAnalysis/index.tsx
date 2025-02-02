import { useQuery } from "@tanstack/react-query";
import { fetchContentAnalysis } from "@/services/contentAnalysis";

interface ContentAnalysisProps {
    postId: number;
}

const ContentAnalysis: React.FC<ContentAnalysisProps> = ({ postId }) => {
    const { data, status, error } = useQuery({
        queryKey: ["contentAnalysis", postId],
        queryFn: () => fetchContentAnalysis(postId),
        retry : false
    });

    if (status === "pending") return <p>분석 결과를 불러오는 중...</p>;
    if (status === "error") return <p>분석 결과를 가져오지 못했습니다. {error?.message}</p>;

    return (
        <div>
            <h2>분석 결과</h2>
            <p>분석 ID: {data?.analysisId}</p>
            <p>컨텐츠 유형: {data?.contentType}</p>
            <p>분석 세부 정보: {data?.analysisDetail}</p>
            <p>분석 일시: {data?.analysisAt ? new Date(data?.analysisAt).toLocaleString() : "작성일 없음"}</p>
            <h3>분석 카테고리 결과</h3>
            <ul>
                {data?.analysisCategoryResultResponseDto.map((result, index) => (
                    <li key={index}>
                        {result.category}: {result.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContentAnalysis;
