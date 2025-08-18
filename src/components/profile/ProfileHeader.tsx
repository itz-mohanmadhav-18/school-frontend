import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Edit, Download, Mail, Phone } from 'lucide-react';

interface ProfileHeaderProps {
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
    [key: string]: any;
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'principal': return 'default';
      case 'teacher': return 'secondary';
      case 'student': return 'outline';
      case 'parent': return 'secondary';
      default: return 'outline';
    }
  };

  const getDisplayName = () => {
    return user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim();
  };

  const getAvatarFallback = () => {
    const name = getDisplayName();
    return name.split(' ').map(n => n[0]).join('').toUpperCase() || user.role[0].toUpperCase();
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.profilePicture} alt={getDisplayName()} />
              <AvatarFallback className="text-lg font-semibold">
                {getAvatarFallback()}
              </AvatarFallback>
            </Avatar>
            <Badge variant={getRoleColor(user.role)} className="capitalize">
              {user.role}
            </Badge>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{getDisplayName()}</h1>
              <p className="text-muted-foreground">ID: {user._id}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              {user.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{user.phone}</span>
                </div>
              )}
            </div>

            {/* Role-specific info */}
            {user.role === 'student' && (
              <div className="flex flex-wrap gap-2 text-sm">
                {user.class && <Badge variant="outline">Class: {user.class}</Badge>}
                {user.section && <Badge variant="outline">Section: {user.section}</Badge>}
                {user.rollNumber && <Badge variant="outline">Roll: {user.rollNumber}</Badge>}
              </div>
            )}

            {user.role === 'teacher' && (
              <div className="flex flex-wrap gap-2 text-sm">
                {user.subjects && <Badge variant="outline">Subjects: {user.subjects.join(', ')}</Badge>}
                {user.department && <Badge variant="outline">Department: {user.department}</Badge>}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};