import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { InfoRow } from './InfoRow';

interface AcademicInfoSectionProps {
  user: any;
}

export const AcademicInfoSection: React.FC<AcademicInfoSectionProps> = ({ user }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Academic Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {user.role === 'student' && (
            <>
              <InfoRow 
                icon={<BookOpen className="h-4 w-4" />}
                label="Class"
                value={user.class || 'Not assigned'}
              />
              <InfoRow 
                icon={<Users className="h-4 w-4" />}
                label="Section"
                value={user.section || 'Not assigned'}
              />
              <InfoRow 
                icon={<Award className="h-4 w-4" />}
                label="Roll Number"
                value={user.rollNumber || 'Not assigned'}
              />
              <InfoRow 
                icon={<GraduationCap className="h-4 w-4" />}
                label="Academic Year"
                value={user.academicYear || 'Current'}
              />
            </>
          )}

          {user.role === 'teacher' && (
            <>
              <InfoRow 
                icon={<BookOpen className="h-4 w-4" />}
                label="Department"
                value={user.department || 'Not assigned'}
              />
              <InfoRow 
                icon={<GraduationCap className="h-4 w-4" />}
                label="Qualification"
                value={user.qualification || 'Not specified'}
              />
              <InfoRow 
                icon={<Award className="h-4 w-4" />}
                label="Experience"
                value={user.experience ? `${user.experience} years` : 'Not specified'}
              />
            </>
          )}
        </CardContent>
      </Card>

      {user.role === 'teacher' && user.subjects && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Subjects Teaching
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user.subjects.map((subject: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {user.role === 'student' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <InfoRow 
              icon={<Award className="h-4 w-4" />}
              label="Overall Grade"
              value="A+"
            />
            <InfoRow 
              icon={<GraduationCap className="h-4 w-4" />}
              label="Attendance"
              value="95.2%"
            />
            <InfoRow 
              icon={<BookOpen className="h-4 w-4" />}
              label="Rank"
              value="5/45"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};