import React from 'react';

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="text-muted-foreground mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-sm break-words">{value}</p>
      </div>
    </div>
  );
};