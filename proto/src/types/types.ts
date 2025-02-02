export interface Board {
    boardId: number;
    boardTitle: string;
    description : string;
    createdAt: string;
    endDate : string | null;
}

export type Boards = Board[];

export interface BoardRequest {
    boardTitle: string;
    description: string;
    endDate: string | null;
    deptIds: string[];
}

export interface PostRequest {
    boardId : number;
    postTitle : string;
    description : string;
}

export interface Post {
    postId : number;
    boardId : number;
    userId : number;
    postTitle : string;
    description : string;
    thumbnail : string;
    createdAt : string;
    modifiedAt : string | null;
    viewCount : number;
    status : string;
}

export type Posts = Post[];

export interface AnalysisCategoryResult {
    category: string;
    score: number;
}

export type analysisCategoryResultResponseDto = AnalysisCategoryResult[];

export interface ContentAnalysis {
    analysisId: number;
    contentType: string;
    analysisDetail: string;
    analysisAt: string;
    analysisCategoryResultResponseDto: analysisCategoryResultResponseDto;
}

export type ContentAnalysisResponse = ContentAnalysis;