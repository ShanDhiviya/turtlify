import { useState } from 'react';
import { Button } from './shared/button';
import { Card, CardContent, CardHeader } from './shared/card';
import { Badge } from './shared/badge';
import { ArrowLeft, Share2, Bookmark, Type, Plus, Minus, Heart, MessageCircle } from 'lucide-react';
import { Article } from '../App';

interface ArticleDetailScreenProps {
  article: Article;
  onBack: () => void;
}

export function ArticleDetailScreen({ article, onBack }: ArticleDetailScreenProps) {
  const [fontSize, setFontSize] = useState(16);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: `Check out this article: "${article.title}" by ${article.author}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(`"${article.title}" by ${article.author}`);
    }
  };

  const formatContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 
            key={index} 
            className="font-semibold mt-6 mb-3" 
            style={{ fontSize: fontSize + 2 }}
          >
            {paragraph.slice(2, -2)}
          </h3>
        );
      }
      if (paragraph.trim()) {
        return (
          <p 
            key={index} 
            className="mb-4 leading-relaxed" 
            style={{ fontSize }}
          >
            {paragraph}
          </p>
        );
      }
      return <div key={index} className="h-4" />;
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Conservation': 'bg-green-100 text-green-800',
      'Research': 'bg-blue-100 text-blue-800',
      'Wildlife Photography': 'bg-purple-100 text-purple-800',
      'Field Notes': 'bg-orange-100 text-orange-800',
      'Education': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-sm font-medium truncate mx-4 flex-1">
            {article.title}
          </h1>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-blue-600' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Font Size Controls */}
        <div className="flex items-center justify-center gap-2 mt-2 p-2 bg-gray-50 rounded-lg">
          <Type className="w-4 h-4 text-gray-500" />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={decreaseFontSize}
            disabled={fontSize <= 12}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="text-sm text-gray-600 min-w-[3rem] text-center">
            {fontSize}px
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={increaseFontSize}
            disabled={fontSize >= 24}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Article Header */}
        <Card>
          <CardHeader className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                {article.featured && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    ⭐ Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-2xl font-semibold leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">{article.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium">{article.author}</div>
                    <div className="text-xs">
                      {new Date(article.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div>{article.readTime} min read</div>
                  <div className="text-xs">{article.content.split(/\s+/).length} words</div>
                </div>
              </div>

              {article.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Article Content */}
        <Card>
          <CardContent className="p-6">
            <div className="prose max-w-none">
              {formatContent(article.content)}
            </div>
          </CardContent>
        </Card>

        {/* Article Actions */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`gap-2 ${isLiked ? 'text-red-600' : ''}`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comment
                </Button>
              </div>
              <Button variant="outline" size="sm" onClick={handleShare}>
                Share Article
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Author Info */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-lg">{article.author[0]}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{article.author}</h4>
                <p className="text-sm text-gray-600">Wildlife enthusiast and nature writer</p>
              </div>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <Card>
          <CardHeader>
            <h3 className="font-semibold">More from {article.category}</h3>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4 text-gray-500">
              <p className="text-sm">Check out more articles in the magazine!</p>
              <Button variant="outline" size="sm" className="mt-2" onClick={onBack}>
                Browse Articles
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}