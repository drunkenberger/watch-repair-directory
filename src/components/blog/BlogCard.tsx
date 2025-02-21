import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { decodeHtmlEntities } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  categories?: Record<string, string> | string[];
  slug: string;
  onClick?: () => void;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  imageUrl,
  categories = [],
  onClick,
}: BlogCardProps) => {
  return (
    <Card
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white flex flex-col"
      onClick={onClick}
    >
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 mb-3">
          {Array.isArray(categories)
            ? categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 hover:bg-blue-50"
                >
                  {category}
                </Badge>
              ))
            : Object.values(categories || {}).map((category, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 hover:bg-blue-50"
                >
                  {category}
                </Badge>
              ))}
        </div>
        <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-primary transition-colors">
          {decodeHtmlEntities(title)}
        </h3>
        <div
          className="text-gray-600 mb-4 line-clamp-2 text-base"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
