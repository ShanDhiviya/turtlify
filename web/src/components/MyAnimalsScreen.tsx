import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, Search } from 'lucide-react';
import { Input } from './ui/input';
import { AnimalDiscovery } from '../App';
import { useState } from 'react';

interface MyAnimalsScreenProps {
  animals: AnimalDiscovery[];
  onAnimalSelect: (animal: AnimalDiscovery) => void;
  onBack: () => void;
}

export function MyAnimalsScreen({ animals, onAnimalSelect, onBack }: MyAnimalsScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnimals = animals.filter(animal =>
    animal.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">My Animals</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search your discoveries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="p-4">
        {animals.length === 0 ? (
          /* Empty State */
          <div className="text-center py-12 space-y-4">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">No discoveries yet</h2>
              <p className="text-gray-500 mt-2">
                Start exploring and identifying animals to build your personal wildlife library!
              </p>
            </div>
            <Button onClick={onBack} className="bg-green-600 hover:bg-green-700">
              Start Discovering
            </Button>
          </div>
        ) : filteredAnimals.length === 0 ? (
          /* No Search Results */
          <div className="text-center py-12 space-y-4">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">No results found</h2>
              <p className="text-gray-500 mt-2">
                Try a different search term or discover more animals!
              </p>
            </div>
          </div>
        ) : (
          /* Animal List */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                {filteredAnimals.length} {filteredAnimals.length === 1 ? 'Discovery' : 'Discoveries'}
              </h2>
            </div>
            
            <div className="space-y-3">
              {filteredAnimals.map((animal) => (
                <Card 
                  key={animal.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => onAnimalSelect(animal)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🐢</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {animal.commonName}
                        </h3>
                        <p className="text-sm italic text-gray-600 truncate">
                          {animal.scientificName}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {animal.classification.class}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(animal.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}