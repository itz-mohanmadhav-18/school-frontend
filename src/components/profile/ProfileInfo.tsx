import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Calendar, MapPin, Heart } from 'lucide-react';
import { InfoRow } from './InfoRow';

interface PersonalInfoSectionProps {
  user: any;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <InfoRow 
          icon={<User className="h-4 w-4" />}
          label="Full Name"
          value={user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim()}
        />
        
        <InfoRow 
          icon={<Calendar className="h-4 w-4" />}
          label="Date of Birth"
          value={user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'Not specified'}
        />
        
        <InfoRow 
          icon={<User className="h-4 w-4" />}
          label="Gender"
          value={user.gender || 'Not specified'}
        />
        
        <InfoRow 
          icon={<MapPin className="h-4 w-4" />}
          label="Address"
          value={user.address || 'Not specified'}
        />
        
        {user.role === 'student' && (
          <>
            <InfoRow 
              icon={<Heart className="h-4 w-4" />}
              label="Blood Group"
              value={user.bloodGroup || 'Not specified'}
            />
            <InfoRow 
              icon={<Calendar className="h-4 w-4" />}
              label="Admission Date"
              value={user.admissionDate ? new Date(user.admissionDate).toLocaleDateString() : 'Not specified'}
            />
          </>
        )}
        
        {user.role === 'teacher' && (
          <>
            <InfoRow 
              icon={<Calendar className="h-4 w-4" />}
              label="Join Date"
              value={user.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'Not specified'}
            />
            <InfoRow 
              icon={<User className="h-4 w-4" />}
              label="Employee ID"
              value={user.employeeId || 'Not specified'}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};