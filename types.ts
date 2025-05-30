export interface PopulationResponse {
  community: { name: "Saskatoon"; uuid: "5db8fc94-a3a1-4fae-a0e9" };
  populations: CommunityPopulations;
}
export type CommunityPopulations = Array<{
  year: number;
  "0-18": number;
  "18-65": number;
  "65+": number;
}>;
