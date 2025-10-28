import { useState } from 'react';
import { Button } from '../shared/button';
import { Card, CardContent, CardHeader, CardTitle } from '../shared/card';
import { Badge } from '../shared/badge';
import { Input } from '../shared/input';
import { ArrowLeft, Search, Edit3, Clock, User, TrendingUp } from 'lucide-react';
import { Article, User as UserType, Screen } from '../../App';

interface WildlifeMagazineScreenProps {
  articles: Article[];
  user: UserType;
  onArticleSelect: (article: Article) => void;
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
}

export function WildlifeMagazineScreen({
  articles,
  user,
  onArticleSelect,
  onNavigate,
  onBack
}: WildlifeMagazineScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Conservation', 'Research', 'Wildlife Photography', 'Field Notes', 'Education'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const userArticles = articles.filter(article => article.authorId === user.id);
  const recentArticles = articles.filter(article => {
    const articleDate = new Date(article.publishDate);
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return articleDate >= weekAgo;
  });

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
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Wildlife Magazine</h1>
          <Button variant="ghost" size="sm" onClick={() => onNavigate('writeArticle')}>
            <Edit3 className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-bold text-green-600">{articles.length}</div>
              <div className="text-xs text-gray-600">Total Articles</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-bold text-blue-600">{recentArticles.length}</div>
              <div className="text-xs text-gray-600">This Week</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-xl font-bold text-orange-600">{userArticles.length}</div>
              <div className="text-xs text-gray-600">Your Articles</div>
            </CardContent>
          </Card>
        </div>

        {/* Write Article CTA */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-500">
          <CardContent className="p-4">
            <div className="text-white space-y-2">
              <h3 className="font-semibold">Share Your Wildlife Story</h3>
              <p className="text-sm text-green-50">
                Have an amazing wildlife encounter or conservation insight? Share it with the community!
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onNavigate('writeArticle')}
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Write Article
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">
              {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
            </h2>
            <span className="text-sm text-gray-500">
              {filteredArticles.length} articles
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">No articles found</h3>
                <p className="text-gray-500 text-sm">
                  {searchTerm ? 'Try a different search term' : 'Be the first to write an article!'}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className={`cursor-pointer hover:shadow-md transition-shadow ${article.featured ? 'border-green-200 bg-green-50' : ''}`}
                  onClick={() => onArticleSelect(article)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {article.featured && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {article.content.substring(0, 120)}...
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <User className="w-3 h-3" />
                            {article.author}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min read
                        </div>
                      </div>

                      <div className="text-xs text-gray-400">
                        {new Date(article.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
