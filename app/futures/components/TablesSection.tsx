import { RefreshCwIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card ,CardContent} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const TablesSection = () => {
  // Tab options data
  const tabOptions = [
    { id: "open-positions", label: "Open Positions", isActive: true },
    { id: "open-orders", label: "Open Orders", isActive: false },
    { id: "orders-history", label: "Orders History", isActive: false },
    { id: "positions-history", label: "Positions History", isActive: false },
    { id: "fee-history", label: "Fee History", isActive: false },
  ];

  // Table headers data
  const tableHeaders = [
    "Symbol",
    "Quantity",
    "Margin",
    "Entry Price",
    "Current Price",
    "Liquidation Price",
    "Set SL/TP",
    "Edit Leverage",
    "Unrealised Pnl",
    "Time",
    "Action",
  ];

  return (
    <Card className="w-full bg-[#242329] rounded-[15px] border-none h-full">
      <CardContent className="p-0">
        <div className="relative">
          <Tabs defaultValue="open-positions" className="w-full">
            <div className="flex justify-between items-center px-4 pt-5 pb-2 border-b border-opacity-30">
              <TabsList className="bg-transparent p-0 h-auto space-x-8">
                {tabOptions.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`px-0 py-0 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                      tab.isActive
                        ? "text-white font-semibold"
                        : "text-[#bbbbbb] font-semibold"
                    } text-sm tracking-[0.42px] font-lexend`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white text-sm h-auto p-0 flex items-center gap-2 font-lexend"
                >
                  <RefreshCwIcon className="h-3 w-3" />
                  Refresh
                </Button>
                <img className="w-2.5 h-2.5" alt="Vector" src="/vector.svg" />
              </div>
            </div>

            <TabsContent value="open-positions" className="mt-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-none">
                      {tableHeaders.map((header, index) => (
                        <TableHead
                          key={index}
                          className="text-[#bbbbbb] text-xs font-normal h-8 font-lexend"
                        >
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Table content will go here when data is available */}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Other tab contents */}
            <TabsContent value="open-orders" className="mt-0">
              <div className="p-4 text-[#bbbbbb] font-lexend">
                Open Orders content
              </div>
            </TabsContent>
            <TabsContent value="orders-history" className="mt-0">
              <div className="p-4 text-[#bbbbbb] font-lexend">
                Orders History content
              </div>
            </TabsContent>
            <TabsContent value="positions-history" className="mt-0">
              <div className="p-4 text-[#bbbbbb] font-lexend">
                Positions History content
              </div>
            </TabsContent>
            <TabsContent value="fee-history" className="mt-0">
              <div className="p-4 text-[#bbbbbb] font-lexend">
                Fee History content
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};