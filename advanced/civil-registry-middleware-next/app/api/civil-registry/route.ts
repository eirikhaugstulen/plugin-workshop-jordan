import { NextResponse } from "next/server";
import { registry } from "./[id]/registry";

export async function GET() {
    const allRegistryData = Object.values(registry);

    return NextResponse.json({ message: "Civil registry data fetched successfully", data: allRegistryData });
}