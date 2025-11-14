import { NextRequest, NextResponse } from "next/server";
import { registry } from "./registry";

export async function GET(_: NextRequest, ctx: RouteContext<'/api/civil-registry/[id]'>) {
    const { id } = await ctx.params;
    
    const registerData = registry[id];

    if (!registerData) {
        const externalDataResponse = await fetch(`https://randomuser.me/api?inc=gender,name&seed=${id}`);

        if (!externalDataResponse.ok) {
            return NextResponse.json({ error: "Failed to fetch external data" }, { status: 500 });
        }

        const externalData = await externalDataResponse.json();

        return NextResponse.json({ message: "Civil registry data fetched from external source successfully", data: externalData.results[0] });
    }

    return NextResponse.json({ message: "Civil registry data fetched from internal source successfully", data: registerData });
}