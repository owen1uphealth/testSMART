import React from "react";
import FhirClientProvider from "./FhirClientProvider";
import Questionnaire from "./Questionnaire";

/**
 * Wraps everything into `FhirClientProvider` so that any component
 * can have access to the fhir client through the context.
 */
export default function Page() {
    return (
        <FhirClientProvider>
            <div>
                <img src="/networkhealth.png" alt="Network Health" />
                <h1>
                Prior Authorization Questionnaire
                </h1>
            </div>
            <hr />
            <Questionnaire />
            <br />
        </FhirClientProvider>
    );
}
