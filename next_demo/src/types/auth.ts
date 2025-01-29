export interface LoginRequest {
    employeeId : string;
    password : string;
}

export interface SignUpRequest {
    employeeId : string;
    userName : string;
    email : string;
    password : string;
    deptId : number;
}

