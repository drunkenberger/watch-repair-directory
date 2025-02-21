import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { ScrollArea } from "../ui/scroll-area";
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

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://public-api.wordpress.com/rest/v1.1/sites/watchrepairnearme6.wordpress.com/posts?fields=ID,title,excerpt,date,featured_image,categories,tags,slug&number=20`,
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
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading posts...</div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[900px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
    </ScrollArea>
  );
};

export default BlogList;
