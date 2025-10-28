// import { Button } from '../shared/button';
// import { Card, CardContent, CardHeader, CardTitle } from '../shared/card';
// import { Badge } from '../shared/badge';
// import { ChevronLeft, MapPin, Calendar, Share } from 'lucide-react';
// import { AnimalDiscovery, Screen } from '../../App';
//
// interface AnimalInfoScreenProps {
//   animal: AnimalDiscovery;
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }
//
// export function AnimalInfoScreen({ animal, onBack, onNavigate }: AnimalInfoScreenProps) {
//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'critically endangered':
//         return 'bg-red-100 text-red-800 border-red-200';
//       case 'endangered':
//         return 'bg-orange-100 text-orange-800 border-orange-200';
//       case 'vulnerable':
//         return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//       case 'near threatened':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'least concern':
//         return 'bg-green-100 text-green-800 border-green-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };
//
//   const handleShare = () => {
//     // Mock share functionality
//     if (navigator.share) {
//       navigator.share({
//         title: `I discovered a ${animal.commonName}!`,
//         text: `Check out this ${animal.commonName} (${animal.scientificName}) I identified using Turtlify!`,
//         url: window.location.href,
//       });
//     } else {
//       // Fallback for browsers that don't support Web Share API
//       const text = `I discovered a ${animal.commonName} (${animal.scientificName}) using Turtlify!`;
//       navigator.clipboard.writeText(text);
//     }
//   };
//
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
//         <Button variant="ghost" size="icon" onClick={onBack}>
//           <ChevronLeft className="w-12 h-12" />
//         </Button>
//         <h1 className="text-xl font-medium">Species Information</h1>
//         <Button variant="ghost" size="icon" onClick={handleShare}>
//           <Share className="w-12 h-12" />
//         </Button>
//       </div>
//
//       <div className="p-4 space-y-4">
//         {/* Image */}
//         <Card className="overflow-hidden">
//           <div className="aspect-square bg-gray-100 flex items-center justify-center">
//             <div className="w-32 h-32 bg-blue-200 rounded-lg flex items-center justify-center">
//               <span className="text-8xl">🐢</span>
//             </div>
//           </div>
//         </Card>
//
//         {/* Basic Info */}
//         <Card>
//           <CardHeader>
//             <div className="flex items-start justify-between">
//               <div>
//                 <CardTitle className="text-2xl">{animal.commonName}</CardTitle>
//                 <p className="text-base text-gray-600 italic">{animal.scientificName}</p>
//               </div>
//               <Badge className={getStatusColor(animal.conservationStatus)}>
//                 {animal.conservationStatus}
//               </Badge>
//             </div>
//           </CardHeader>
//           <CardContent className="space-y-3">
//             <div className="flex items-center gap-2 text-base text-gray-600">
//               <MapPin className="w-5 h-5" />
//               <span>{animal.habitat}</span>
//             </div>
//             <div className="flex items-center gap-2 text-base text-gray-600">
//               <Calendar className="w-5 h-5" />
//               <span>Identified {new Date(animal.timestamp).toLocaleDateString()}</span>
//             </div>
//           </CardContent>
//         </Card>
//
//         {/* Classification */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-xl">Scientific Classification</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 gap-2 text-base">
//               <div><span className="font-medium">Kingdom:</span> {animal.classification.kingdom}</div>
//               <div><span className="font-medium">Phylum:</span> {animal.classification.phylum}</div>
//               <div><span className="font-medium">Class:</span> {animal.classification.class}</div>
//               <div><span className="font-medium">Order:</span> {animal.classification.order}</div>
//               <div><span className="font-medium">Family:</span> {animal.classification.family}</div>
//               <div><span className="font-medium">Genus:</span> {animal.classification.genus}</div>
//             </div>
//           </CardContent>
//         </Card>
//
//         {/* Fun Facts */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-xl">Fun Facts</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2">
//               {animal.funFacts.map((fact, index) => (
//                 <li key={index} className="flex items-start gap-2 text-base">
//                   <span className="text-green-600 mt-1">•</span>
//                   <span>{fact}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//
//         {/* Action Buttons */}
//         <div className="space-y-3">
//           <Button
//             onClick={() => onNavigate('home')}
//             className="w-full bg-green-600 hover:bg-green-700 text-base"
//           >
//             Identify Another Animal
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
