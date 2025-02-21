import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Post {
  ID: number;
  title: string;
  excerpt: string;
  date: string;
  featured_image: string;
  categories: {
    [key: string]: {
      ID: number;
      name: string;
      slug: string;
    };
  };
  slug: string;
}

const BlogPreview = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://public-api.wordpress.com/rest/v1.1/sites/watchrepairnearme6.wordpress.com/posts?fields=ID,title,excerpt,date,featured_image,categories,tags,slug&number=3`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] -z-10" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl font-serif font-medium mb-4 text-primary leading-tight">
              Latest Watch Care Tips
            </h2>
            <p className="text-gray-600 max-w-2xl font-sans font-light text-lg">
              Expert advice on maintaining and repairing your timepieces
            </p>
          </div>
          <Button
            onClick={() => navigate("/blog")}
            variant="outline"
            className="hidden md:flex"
          >
            View All Posts <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <BlogCard
              key={post.ID}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              imageUrl={
                post.featured_image ||
                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800"
              }
              categories={Object.values(post.categories || {}).map(
                (cat) => cat.name,
              )}
              slug={post.slug}
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
          ))}
        </div>

        <Button
          onClick={() => navigate("/blog")}
          variant="outline"
          className="w-full md:hidden"
        >
          View All Posts <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default BlogPreview;
