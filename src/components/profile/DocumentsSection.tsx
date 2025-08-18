import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye, Upload } from 'lucide-react';

interface DocumentsSectionProps {
  user: any;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ user }) => {
  const documents = [
    { name: 'Academic Transcript', type: 'PDF', uploaded: true },
    { name: 'Identity Proof', type: 'PDF', uploaded: true },
    { name: 'Address Proof', type: 'PDF', uploaded: false },
    { name: 'Medical Certificate', type: 'PDF', uploaded: true },
  ];

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">{doc.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={doc.uploaded ? "default" : "destructive"}>
                    {doc.uploaded ? "Uploaded" : "Missing"}
                  </Badge>
                  {doc.uploaded ? (
                    <>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};