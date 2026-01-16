import React, { useState, useEffect } from 'react';
import { Activity, Server, Cpu, Database, Wifi } from 'lucide-react';

export const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    cpu: 12,
    memory: 45,
    latency: 24,
    requests: 843
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.min(100, Math.max(5, prev.cpu + (Math.random() * 10 - 5))),
        memory: Math.min(100, Math.max(20, prev.memory + (Math.random() * 4 - 2))),
        latency: Math.max(10, prev.latency + (Math.random() * 10 - 5)),
        requests: prev.requests + Math.floor(Math.random() * 5)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-1 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center text-xs font-mono text-emerald-500">
            <Activity size={14} className="mr-2" />
            LIVE_INFRA_MONITOR
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-slate-400 font-mono">us-east-1</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {/* CPU Metric */}
          <div className="bg-slate-950 p-3 rounded border border-slate-800/50">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <div className="flex items-center gap-2">
                <Cpu size={16} />
                <span className="text-xs font-mono">CPU_LOAD</span>
              </div>
              <span className="text-xs font-mono">{metrics.cpu.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-1000 ease-out"
                style={{ width: `${metrics.cpu}%` }}
              ></div>
            </div>
          </div>

          {/* Memory Metric */}
          <div className="bg-slate-950 p-3 rounded border border-slate-800/50">
             <div className="flex items-center justify-between text-slate-400 mb-2">
              <div className="flex items-center gap-2">
                <Database size={16} />
                <span className="text-xs font-mono">MEM_USAGE</span>
              </div>
              <span className="text-xs font-mono">{metrics.memory.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                style={{ width: `${metrics.memory}%` }}
              ></div>
            </div>
          </div>

          {/* Latency Metric */}
          <div className="bg-slate-950 p-3 rounded border border-slate-800/50">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <div className="flex items-center gap-2">
                <Wifi size={16} />
                <span className="text-xs font-mono">LATENCY</span>
              </div>
              <span className="text-xs font-mono">{metrics.latency.toFixed(0)}ms</span>
            </div>
            <div className="flex items-end h-1.5 space-x-0.5">
               {[...Array(10)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`w-full rounded-sm transition-all duration-500 ${i < (metrics.latency / 10) ? 'bg-yellow-500' : 'bg-slate-800'}`}
                   style={{ height: '100%' }}
                 ></div>
               ))}
            </div>
          </div>

           {/* Active Requests */}
           <div className="bg-slate-950 p-3 rounded border border-slate-800/50">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <div className="flex items-center gap-2">
                <Server size={16} />
                <span className="text-xs font-mono">REQ/SEC</span>
              </div>
              <span className="text-xs font-mono text-emerald-400">{metrics.requests}</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-1">
              Load Balancer: Active
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};