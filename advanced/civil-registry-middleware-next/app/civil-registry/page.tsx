"use client";

import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";

type CivilRegistryResponse = {
    message: string;
    data: unknown;
};

async function fetchCivilRegistry(id?: string) {
    const response = await fetch(id ? `/api/civil-registry/${id}` : "/api/civil-registry", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to fetch civil registry data");
    }

    return (await response.json()) as CivilRegistryResponse;
}

import Link from "next/link";

export default function CivilRegistryPage() {
    const [identifier, setIdentifier] = useState("");

    const mutation = useMutation({
        mutationFn: fetchCivilRegistry,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedId = identifier.trim();

        if (!trimmedId) {
            return;
        }

        mutation.mutate(trimmedId);
    };

    const handleFetchAll = () => {
        mutation.mutate(undefined);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 font-sans text-slate-900">
            <main className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-10 backdrop-blur">
                <div className="mb-6 text-sm">
                    <Link
                        href="/"
                        className="font-semibold text-slate-600 hover:text-slate-900"
                    >
                        ← Back to landing page
                    </Link>
                </div>
                <h1 className="mb-6 text-3xl font-semibold">
                    Civil registry demo
                </h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label className="text-sm font-medium uppercase tracking-wide text-slate-500">
                        ID
                    </label>
                    <input
                        className="w-full rounded-2xl border border-slate-300 px-4 py-4 text-lg outline-none transition focus:border-slate-500"
                        placeholder="Enter national ID number"
                        value={identifier}
                        onChange={(event) => setIdentifier(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="rounded-2xl bg-slate-900 px-4 py-3 text-lg font-semibold text-white transition hover:bg-slate-700 disabled:bg-slate-500"
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? "Looking up…" : "Search by ID"}
                    </button>
                    <button
                        type="button"
                        className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-lg font-semibold text-slate-900 transition hover:border-slate-500 disabled:border-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                        onClick={handleFetchAll}
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? "Fetching all…" : "Fetch all values"}
                    </button>
                </form>

                <section className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                    {mutation.isPending && (
                        <p className="text-sm font-medium text-slate-600">Loading...</p>
                    )}

                    {mutation.error instanceof Error && (
                        <p className="text-sm font-semibold text-red-500">
                            {mutation.error.message}
                        </p>
                    )}

                    {mutation.isSuccess && (
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-slate-600">
                                Registry response:
                            </p>
                            <pre className="rounded-xl bg-white/90 p-3 text-xs font-mono text-slate-800">
                                {JSON.stringify(mutation.data, null, 2)}
                            </pre>
                        </div>
                    )}

                    {!mutation.isPending && !mutation.error && !mutation.isSuccess && (
                        <p className="text-sm text-slate-600">
                            Submit an ID to query the civil registry endpoint.
                        </p>
                    )}
                </section>
            </main>
        </div>
    );
}

