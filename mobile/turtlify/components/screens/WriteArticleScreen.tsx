import { useState } from 'react';
import { Button } from '../shared/button';
import { Card, CardContent, CardHeader, CardTitle } from '../shared/card';
import { Input } from '../shared/input';
import { Textarea } from '../shared/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../shared/select';
import { Badge } from '../shared/badge';
import { ArrowLeft, Save, Eye, Hash, X } from 'lucide-react';
import { Article } from '../../App';

interface WriteArticleScreenProps {
  onPublish: (article: Omit<Article, 'id' | 'authorId' | 'author' | 'publishDate'>) => void;
  onBack: () => void;
}

export function WriteArticleScreen({ onPublish, onBack }: WriteArticleScreenProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<Article['category']>('Education');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const categories: Article['category'][] = ['Conservation', 'Research', 'Wildlife Photography', 'Field Notes', 'Education'];

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim()) && tags.length < 5) {
      setTags([...tags, currentTag.trim().toLowerCase()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) return;

    onPublish({
      title: title.trim(),
      content: content.trim(),
      category,
      readTime: estimateReadTime(content),
      tags: tags
    });
  };

  const formatPreviewContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <h3 key={index} className="font-semibold text-lg mt-4 mb-2">{paragraph.slice(2, -2)}</h3>;
      }
      if (paragraph.trim()) {
        return <p key={index} className="mb-3">{paragraph}</p>;
      }
      return <div key={index} className="h-3" />;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Write Article</h1>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              onClick={handlePublish}
              disabled={!title.trim() || !content.trim()}
              className="bg-green-600 hover:bg-green-700"
            >
              <Save className="w-4 h-4 mr-1" />
              Publish
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {!isPreview ? (
          <>
            {/* Article Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Article Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    placeholder="Enter your article title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={category} onValueChange={(value: Article['category']) => setCategory(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags (Optional)</label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      placeholder="Add a tag..."
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      className="flex-1"
                    />
                    <Button onClick={addTag} size="sm" variant="outline">
                      <Hash className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-1">
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {5 - tags.length} tags remaining
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center justify-between">
                  Article Content
                  <span className="text-sm font-normal text-gray-500">
                    ~{estimateReadTime(content)} min read
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Share your wildlife story, research findings, photography tips, or conservation insights here...

Pro tip: Use **text** to create section headers in your article."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] text-base leading-relaxed"
                />
                <p className="text-xs text-gray-500 mt-2">
                  {content.split(/\s+/).length} words
                </p>
              </CardContent>
            </Card>

            {/* Writing Tips */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Writing Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Start with an engaging opening that hooks readers</li>
                  <li>• Use **text** to create bold section headers</li>
                  <li>• Include specific examples and personal experiences</li>
                  <li>• Add relevant tags to help others discover your article</li>
                </ul>
              </CardContent>
            </Card>
          </>
        ) : (
          /* Preview Mode */
          <Card>
            <CardHeader>
              <div className="space-y-2">
                <Badge className="w-fit">{category}</Badge>
                <h1 className="text-xl font-semibold">{title || 'Untitled Article'}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>~{estimateReadTime(content)} min read</span>
                  <span>{content.split(/\s+/).length} words</span>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                {content ? formatPreviewContent(content) : (
                  <p className="text-gray-500 italic">Start writing to see your preview...</p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
