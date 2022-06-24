import { NextResponse } from "next/server"; 
import { API_URL } from "../helpers";  
import Cookies from "js-cookie";

export async function middleware(req){
    const token = req.Cookies.token
    let response = await fetch(`${API_URL}/auth/checkRole`,{
        method: "GET", 
        headers: { 
            auhtorization: `bearer ${token}`,
        }
    }) 
    let data = await response.json()
    let role = data.role_id 

    if (req.nextUrl.pathname.includes("/admin") && role !== "admin"){
        return NextResponse.redirect(new URL("/", req.url))
    } 
    return NextResponse.next()
}