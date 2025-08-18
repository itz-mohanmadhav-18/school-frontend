import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { InfoRow } from './InfoRow';

interface ContactInfoSectionProps {
  user: any;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ user }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <InfoRow 
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value={user.email}
          />
          <InfoRow 
            icon={<Phone className="h-4 w-4" />}
            label="Phone"
            value={user.phone || 'Not provided'}
          />
          <InfoRow 
            icon={<MapPin className="h-4 w-4" />}
            label="Address"
            value={user.address || 'Not provided'}
          />
          {user.website && (
            <InfoRow 
              icon={<Globe className="h-4 w-4" />}
              label="Website"
              value={user.website}
            />
          )}
        </CardContent>
      </Card>

      {user.role === 'student' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Parent/Guardian Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <InfoRow 
              icon={<Phone className="h-4 w-4" />}
              label="Parent Name"
              value={user.parentName || 'Not provided'}
            />
            <InfoRow 
              icon={<Phone className="h-4 w-4" />}
              label="Parent Phone"
              value={user.parentPhone || 'Not provided'}
            />
            <InfoRow 
              icon={<Mail className="h-4 w-4" />}
              label="Parent Email"
              value={user.parentEmail || 'Not provided'}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};