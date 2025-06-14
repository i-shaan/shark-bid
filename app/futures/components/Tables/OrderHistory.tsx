import React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const headers = [
  "Symbol", "Filled/Total", "Price", "Quantity", "Order", "Type",
  "Leverage", "Time", "Status"
];

export const OrdersHistoryTable = () => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
      <TableRow className="border-none hover:bg-transparent [&>th]:hover:bg-transparent">
          {headers.map((head, idx) => (
            <TableHead key={idx} className="text-[#bbbbbb] text-xs font-normal h-8 font-lexend">
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{/* dynamic rows */}</TableBody>
    </Table>
  </div>
);
