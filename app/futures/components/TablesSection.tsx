"use client";
import { RefreshCwIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { OpenPositionsTable } from "./Tables/OpenPosition";
import { OpenOrdersTable } from "./Tables/OpenOrders";
import { OrdersHistoryTable } from "./Tables/OrderHistory";
import { PositionsHistoryTable } from "./Tables/PositionHistory";
import { FeeHistoryTable } from "./Tables/FeeHistory";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const TablesSection = () => {
  const [activeTab, setActiveTab] = useState("open-positions");

  const tabOptions = [
    { id: "open-positions", label: "Open Positions" },
    { id: "open-orders", label: "Open Orders" },
    { id: "orders-history", label: "Orders History" },
    { id: "positions-history", label: "Positions History" },
    { id: "fee-history", label: "Fee History" },
  ];

  return (
    <Card className="w-full bg-[#242329] rounded-[15px] border-none h-full p-0">
      <CardContent className="p-0">
        <div className="relative">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-between items-center px-4 pt-5 pb-2 border-b border-opacity-30">
              <TabsList className="bg-transparent p-0 h-auto space-x-8">
                {tabOptions.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`px-0 py-0 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                      activeTab === tab.id
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
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.454544L10 2.84091C10 3.09091 9.79546 3.29545 9.54546 3.29545C9.29546 3.29545 9.09091 3.09091 9.09091 2.84091L9.09091 1.55682L6.21591 4.42045C6.125 4.51136 6.01136 4.55682 5.89773 4.55682C5.78409 4.55682 5.67046 4.51136 5.57955 4.42045C5.39773 4.23864 5.39773 3.95454 5.57955 3.77273L8.44318 0.909089L7.15909 0.90909C6.90909 0.90909 6.70455 0.704544 6.70455 0.454544C6.70455 0.204544 6.90909 -1.20802e-06 7.15909 -1.25174e-06L9.54545 -1.66898e-06C9.67045 -1.69084e-06 9.78409 0.0454528 9.86364 0.136362C9.95455 0.215907 10 0.329544 10 0.454544ZM3.73864 5.625L0.909092 8.44318L0.909092 7.15909C0.909092 6.90909 0.704547 6.70455 0.454547 6.70455C0.204547 6.70455 1.20802e-06 6.90909 1.25174e-06 7.15909L1.66898e-06 9.54545C1.69084e-06 9.67045 0.0454563 9.78409 0.136365 9.86364C0.215911 9.95455 0.329547 10 0.454547 10L2.84091 10C3.09091 10 3.29546 9.79545 3.29546 9.54545C3.29546 9.29545 3.09091 9.09091 2.84091 9.09091L1.55682 9.09091L4.38636 6.26136C4.56818 6.07954 4.56818 5.79545 4.38636 5.61364C4.20455 5.44318 3.90909 5.44318 3.73864 5.625Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <TabsContent value="open-positions" className="mt-0 ">
              <OpenPositionsTable />
            </TabsContent>

            <TabsContent value="open-orders" className="mt-0">
              <OpenOrdersTable />
            </TabsContent>

            <TabsContent value="orders-history" className="mt-0">
              <OrdersHistoryTable />
            </TabsContent>

            <TabsContent value="positions-history" className="mt-0">
              <PositionsHistoryTable />
            </TabsContent>

            <TabsContent value="fee-history" className="mt-0">
              <FeeHistoryTable />
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};
