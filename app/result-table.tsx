import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CommunityPopulations } from "@/types";
const AGE_GAPS: Array<Exclude<keyof CommunityPopulations[number], "year">> = [
  "0-18",
  "18-65",
  "65+",
];
export function ResultTable({ data }: { data: CommunityPopulations }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          {AGE_GAPS.map((ageGap) => (
            <TableHead key={ageGap}>{ageGap}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ year, ...rest }) => (
          <TableRow key={year}>
            <TableCell className="font-medium">{year}</TableCell>
            {Object.entries(rest).map(([ageGap, value]) => (
              <TableCell key={ageGap}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
