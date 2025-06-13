import React from "react";
import { Card,CardContent } from "@/components/ui/card";

export const ChartSection = ()=> {
  return (
    <Card className="w-full h-full bg-[#242329] rounded-[15px] border-none">
      <CardContent className="p-4 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="text-[#bbbbbb] text-lg font-lexend">
            Chart Component Placeholder
          </div>
        </div>
      </CardContent>
    </Card>
  );
};