import React from "react";
import { EnrollmentOverviewProps } from "../Plugin.types";

export const PluginContent = ({
    teiId,
    programId,
    enrollmentId,
    orgUnitId,
    navigate
}: EnrollmentOverviewProps) => {
    return (
        <div>
            Hello from an enrollment plugin!
        </div>
    )
}