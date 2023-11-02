import { FC } from "react";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface ChartProps {
  completed: number;
  todo: number;
}

export const Chart: FC<ChartProps> = ({ completed, todo }) => {
  const data = [
    { name: "Completed", value: completed },
    { name: "Todo", value: todo },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1}>
      <PieChart>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          Statistics
        </text>
        <Pie
          dataKey="value"
          data={data}
          startAngle={30}
          endAngle={390}
          cx={"50%"}
          cy={"50%"}
          innerRadius="80%"
          outerRadius="90%"
        >
          {data.map((entry) => (
            <Cell
              key={entry.name}
              fill={entry.name === "Completed" ? "#498855" : "#e1dfdf"}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
