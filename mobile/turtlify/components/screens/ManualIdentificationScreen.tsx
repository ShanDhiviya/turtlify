import { Button } from '../shared/button';
import { Card, CardContent } from '../shared/card';
import { ChevronLeft } from 'lucide-react';

interface ManualIdentificationScreenProps {
  onPDFOpen: (title: string) => void;
  onBack: () => void;
}

interface CategoryTile {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const categories: CategoryTile[] = [
  {
    id: 'shells',
    title: 'SHELLS',
    imageUrl: 'https://images.unsplash.com/photo-1482642302383-7ba0f8012849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJ0bGUlMjBzaGVsbHMlMjBtYXJpbmV8ZW58MXx8fHwxNzU0NjYxMjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Marine and turtle shell identification guide'
  },
  {
    id: 'bones',
    title: 'BONES',
    imageUrl: 'https://images.unsplash.com/photo-1669804245652-d32e5179e9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBib25lcyUyMHNrZWxldG9ufGVufDF8fHx8MTc1NDY2MTIzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Animal bone structure and identification'
  },
  {
    id: 'cartilage',
    title: 'CARTILAGE',
    imageUrl: 'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWxhZ2UlMjBhbmF0b215JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTQ2NjEyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Cartilage structures in marine animals'
  },
  {
    id: 'meat',
    title: 'MEAT',
    imageUrl: 'https://images.unsplash.com/photo-1673200219645-72f5f55d248e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwc2VhZm9vZCUyMGZpc2h8ZW58MXx8fHwxNzU0NjYxMjM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Seafood and marine meat identification'
  },
  {
    id: 'eggs',
    title: 'EGGS',
    imageUrl: 'https://images.unsplash.com/photo-1633081528823-9198babd248e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJ0bGUlMjBlZ2dzJTIwcmVwdGlsZXxlbnwxfHx8fDE3NTQ2NjEyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Turtle and reptile egg identification'
  },
  {
    id: 'leather',
    title: 'LEATHER',
    imageUrl: 'https://images.unsplash.com/photo-1671390394805-27ad9af270dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYW5pbWFsJTIwaGlkZXxlbnwxfHx8fDE3NTQ2NjEyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Animal hide and leather identification'
  },
  {
    id: 'medicine',
    title: 'MEDICINE',
    imageUrl: 'https://images.unsplash.com/photo-1705083649602-03c5fbae2e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHRyYWRpdGlvbmFsJTIwaGVyYnN8ZW58MXx8fHwxNzU0NjYxMjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional medicine from marine sources'
  },
  {
    id: 'specimens',
    title: 'SPECIMENS',
    imageUrl: 'https://images.unsplash.com/photo-1571845413709-ba4ddc85eb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBzcGVjaW1lbnMlMjBwcmVzZXJ2ZWR8ZW58MXx8fHwxNzU0NjYxMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Preserved specimens and collections'
  }
];

export function ManualIdentificationScreen({ onPDFOpen, onBack }: ManualIdentificationScreenProps) {
  const handleTileClick = (title: string) => {
    onPDFOpen(title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ChevronLeft className="w-12 h-12" />
        </Button>
        <h1 className="text-xl font-medium text-green-800">Manual Identification</h1>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
            <span className="text-3xl">🔍</span>
          </div>
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Browse Categories</h2>
          <p className="text-base text-gray-600">Select a category to access identification guides and resources</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleTileClick(category.title)}
            >
              <div className="aspect-square relative">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-medium text-xl tracking-wide">
                    {category.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-base text-gray-600 text-center">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium mb-2 text-base text-gray-800">How to Use</h3>
          <ul className="text-base text-gray-600 space-y-1">
            <li>• Select a category that matches your specimen</li>
            <li>• Browse through identification guides</li>
            <li>• Compare physical characteristics</li>
            <li>• Use field guides for accurate identification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
