
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

const generateData = () => {
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      name: `Point ${i}`,
      value: Math.floor(Math.random() * 100) + 20,
      value2: Math.floor(Math.random() * 80) + 10,
    });
  }
  return data;
};

const ChartVisualization = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full p-4 relative">
      {/* Chart grid lines overlay */}
      <div className="absolute inset-0 flex flex-col">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-t border-white/10 flex-1"></div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-row">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-l border-white/10 flex-1"></div>
        ))}
      </div>

      {/* Network nodes visualization */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/9c5cd740-33b5-4868-a640-34b1cad1b4ef.png"
          alt=""
          className="w-full h-full object-contain opacity-40"
        />
      </div>

      {/* Chart */}
      <div className="relative h-full w-full z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#36D1DC" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#5B86E5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF61D2" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#9D54FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" tick={false} axisLine={false} />
            <YAxis hide={true} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '4px',
                color: 'white'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#36D1DC" 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="value2" 
              stroke="#FF61D2" 
              fillOpacity={1} 
              fill="url(#colorValue2)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Glowing dots at chart points */}
      <div className="absolute inset-0 pointer-events-none">
        {data.map((point, index) => (
          <div 
            key={index}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            style={{ 
              left: `${(index / (data.length - 1)) * 100}%`, 
              top: `${100 - (point.value / 120) * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChartVisualization;
