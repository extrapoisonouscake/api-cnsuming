import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { PopulationResponse } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import { ResultTable } from "./result-table";

enum Cities {
  Regina = "319f7232-d7e7-4899-b057",
  MooseJaw = "01aa96ae-d695-418f-ad08",
  Saskatoon = "5db8fc94-a3a1-4fae-a0e9",
}
const citiesNames = Object.values({
  [Cities.Regina]: "Regina",
  [Cities.MooseJaw]: "Moose Jaw",
  [Cities.Saskatoon]: "Saskatoon",
});
const getEndpointURL = (uuid: string) =>
  `https://population-api.davidcantwell.ca/api/weather/${uuid}`;
export default async function Home() {
  const responses = await Promise.all(
    Object.values(Cities).map((uuid) =>
      fetch(getEndpointURL(uuid)).then((res) =>
        res.ok ? (res.json() as Promise<PopulationResponse>) : null
      )
    )
  );
  return (
    <div className="flex flex-col" style={{ padding: "32px", gap: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        Population Data
      </h1>
      <div className="flex flex-col gap-4">
        {responses.map((response, i) => (
          <div className="flex flex-col gap-2" key={i}>
            <h3 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              {citiesNames[i]}
            </h3>
            {response ? (
              <ResultTable data={response.populations} />
            ) : (
              <ErrorMessage />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
function ErrorMessage() {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Something went wrong.</AlertTitle>
      <AlertDescription>
        <p>Please try again later.</p>
      </AlertDescription>
    </Alert>
  );
}
