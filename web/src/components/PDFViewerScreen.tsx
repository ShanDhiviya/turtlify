import { Button } from './ui/button';
import { ChevronLeft, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';

interface PDFViewerScreenProps {
  title: string;
  onBack: () => void;
}

export function PDFViewerScreen({ title, onBack }: PDFViewerScreenProps) {
  const [zoom, setZoom] = useState(100);

  // Sample PDF URL (using a publicly available wildlife PDF)
  const pdfUrl = "https://www.learner.org/wp-content/uploads/2019/05/AnimalBehavior.pdf";

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleDownload = () => {
    // Open PDF in new tab for download
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100" style={{
      marginTop:'116px',
    }}>
      {/* Header */}
      <div className="fixed left-0 right-0 top-0 z-40 bg-white shadow-sm px-4 py-3 flex items-center justify-between" style={{
        zIndex:999
      }}>
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ChevronLeft className="w-12 h-12" style={{
            width: 24,
            height: 24,
          }} />
        </Button>
        <h1 className="text-xl font-medium text-green-800 flex-1 text-center px-2 font-bold">
          {title} Guide
        </h1>
        <Button variant="ghost" size="icon" onClick={handleDownload}>
          <Download className="w-12 h-12" style={{
            width: 24,
            height: 24,
          }} />
        </Button>
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleZoomOut}>
            <ZoomOut className="w-5 h-5" />
          </Button>
          <span className="text-base font-medium min-w-16 text-center">{zoom}%</span>
          <Button variant="outline" onClick={handleZoomIn}>
            <ZoomIn className="w-5 h-5" />
          </Button>
        </div>
        <div className="text-base text-gray-600">
          {title} Identification Guide
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 p-4 fixed" style={{
        top:58,
        zIndex:99,
      }}>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* PDF Preview/Mock Content */}
          <div className="aspect-[8.5/11] bg-white border">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full"
              title={`${title} Identification Guide`}
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
            />
          </div>
        </div>

        {/* Fallback content if PDF fails to load */}
        <div className="mt-4 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-medium mb-4 text-base text-gray-800">{title} Identification Guide</h3>
          <div className="space-y-4 text-base text-gray-700">
            <div>
              <h4 className="font-medium mb-2">Key Characteristics:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Physical structure and morphology</li>
                <li>Size and shape variations</li>
                <li>Color patterns and markings</li>
                <li>Texture and surface features</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Identification Process:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Examine overall structure</li>
                <li>Note distinctive features</li>
                <li>Compare with reference images</li>
                <li>Consult expert resources</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium mb-2">Conservation Notes:</h4>
              <p>
                Please ensure that any specimens being identified comply with local wildlife
                protection laws and regulations. Report significant findings to appropriate
                conservation authorities.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                <strong>🐢 Turtlify Tip:</strong> For best results, photograph specimens
                from multiple angles and in good lighting conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
