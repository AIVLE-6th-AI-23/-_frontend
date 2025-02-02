import { ContentAnalysisResponse } from '@/types/types';
import { api, ApiResponse } from './api';

export const fetchContentAnalysis = async (postId: number): Promise<ContentAnalysisResponse> => {
    const response = await api.get<ApiResponse<ContentAnalysisResponse>>(`/api/${postId}/content-analysis`);
    
    return response.data.data;
}