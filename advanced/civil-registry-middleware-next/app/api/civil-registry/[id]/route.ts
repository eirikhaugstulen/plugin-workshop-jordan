import { NextRequest, NextResponse } from "next/server";
import { registry, Registry } from "./registry";

type ExternalData = {
    results: {
        gender: string;
        name: {
            title: string;
            first: string;
            last: string;
        };
        dob: {
            date: string;
            age: number;
        };
    }[];
}

export async function GET(_: NextRequest, ctx: RouteContext<'/api/civil-registry/[id]'>) {
    const { id } = await ctx.params;
    
    const registerData = registry[id];

    if (!registerData) {
        const externalDataResponse = await fetch(`https://randomuser.me/api?inc=gender,dob,name&seed=${id}`);

        if (!externalDataResponse.ok) {
            return NextResponse.json({ error: "Failed to fetch external data" }, { status: 500 });
        }

        const externalData = await externalDataResponse.json() as ExternalData;

        const transformedData: Registry = {
            uniqueId: id,
            firstName: externalData.results[0].name.first,
            lastName: externalData.results[0].name.last,
            birthDate: externalData.results[0].dob.date.split('T')[0],
        }

        return NextResponse.json({
            message: "Civil registry data fetched from external source successfully",
            data: transformedData,
        });
    }

    return NextResponse.json({ 
        message: "Civil registry data fetched from internal source successfully", 
        data: registerData,
    });
}