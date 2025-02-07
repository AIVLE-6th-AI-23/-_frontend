import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { logout, sessionCheck } from "@/services/auth";
import { UserResponse } from "@/types/types";
import * as styles from "./userProfile.css"
import Link from "next/link";
import Image from "next/image";


const UserProfile: React.FC = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const pathName = usePathname();

    const { data: user } = useQuery<UserResponse | null>({
        queryKey: ["user"],
        queryFn: async () => {
            const userData = await sessionCheck();
            if (!userData) {
                router.push("/login"); // 세션 만료 시 로그인 페이지로 이동
            }
            return userData;
        },
        staleTime: Infinity, 
        retry: false, 
    });

    useEffect(() => {
        queryClient.invalidateQueries({queryKey: ["user"]});
    }, [pathName]);

    const handleLogout = async (): Promise<void> => {
        await logout();
        queryClient.setQueryData(["user"], null);
        queryClient.removeQueries({ queryKey: ["user"] });
        router.push("/login");
    };

    return (
        <div className={styles.userProfile}>
            {user ? (
                <>
                    <span className={styles.userName}>{user.userName}</span>
                    <Image src={"/images/profile.jpg"} alt="Profile" className={styles.profilePic} width={40} height={40}/>
                    <button onClick={handleLogout} className={styles.logoutButton}>로그아웃</button>
                </>
            ) : (
                <Link href="/login" className={styles.loginButton}>로그인</Link>
            )}
        </div>
    );
};

export default UserProfile;
