import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Heart } from 'lucide-react';
import { InfoRow } from './InfoRow';

interface EmergencyContactSectionProps {
  user: any;
}

export const EmergencyContactSection: React.FC<EmergencyContactSectionProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Emergency Contact
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <InfoRow 
          icon={<Phone className="h-4 w-4" />}
          label="Emergency Contact Name"
          value={user.emergencyContactName || 'Not provided'}
        />
        <InfoRow 
          icon={<Phone className="h-4 w-4" />}
          label="Emergency Contact Phone"
          value={user.emergencyContactPhone || 'Not provided'}
        />
        <InfoRow 
          icon={<Heart className="h-4 w-4" />}
          label="Relationship"
          value={user.emergencyContactRelation || 'Not specified'}
        />
      </CardContent>
    </Card>
  );
};