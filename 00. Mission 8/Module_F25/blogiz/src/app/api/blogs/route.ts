import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello from blog server" });
};
export const POST = async (request: Request) => {
  return NextResponse.json({ message: "Hello from blog server" });
};
export const PUT = async (request: Request) => {
  return NextResponse.json({ message: "Hello from blog server" });
};
export const PATCH = async (request: Request) => {
  return NextResponse.json({ message: "Hello from blog server" });
};
export const DELETE = async (request: Request) => {
  return NextResponse.json({ message: "Hello from blog server" });
};
