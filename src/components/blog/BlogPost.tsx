import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

interface Post {
  ID: number;
  title: string;
  content: string;
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

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://public-api.wordpress.com/rest/v1.1/sites/watchrepairnearme6.wordpress.com/posts/slug:${slug}?content_width=1000`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json();

        // Process social media embeds and other content
        let processedContent = post.content;

        // Fix WordPress stripped iframes and embeds
        processedContent = processedContent
          // Fix YouTube embeds (both URL and iframe versions)
          .replace(
            /https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/g,
            "https://www.youtube.com/embed/$1",
          )
          .replace(
            /<figure[^>]*class="[^"]*wp-block-embed[^"]*youtube[^"]*"[^>]*>.*?<div[^>]*class="wp-block-embed__wrapper"[^>]*>.*?(?:<p>)?\s*(https:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/)([\w-]+))\s*(?:<\/p>)?.*?<\/div><\/figure>/gs,
            '<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube"><div class="wp-block-embed__wrapper"><iframe width="800" height="450" src="https://www.youtube.com/embed/$2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div></figure>',
          )
          // Fix image URLs
          .replace(
            /"(https?:\/\/watchrepairnearme6\.files\.wordpress\.com[^"]+)"/g,
            (match, url) => `"${url}?w=1000"`,
          )
          // Fix Twitter embeds
          .replace(
            /https:\/\/twitter\.com\/[^\s"]+/g,
            (match) =>
              `<div class="twitter-tweet"><blockquote class="twitter-tweet"><a href="${match}"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`,
          )
          // Fix Instagram embeds
          .replace(
            /https:\/\/www\.instagram\.com\/p\/[^\s"]+/g,
            (match) =>
              `<div class="instagram-media"><blockquote class="instagram-media"><a href="${match}"></a></blockquote><script async src="//www.instagram.com/embed.js"></script></div>`,
          )
          // Fix TikTok embeds
          .replace(
            /https:\/\/www\.tiktok\.com\/[^\s"]+/g,
            (match) =>
              `<div class="tiktok-embed"><blockquote class="tiktok-embed"><a href="${match}"></a></blockquote><script async src="https://www.tiktok.com/embed.js"></script></div>`,
          )
          // Add missing attributes to existing iframes
          .replace(
            /<iframe([^>]*)>/g,
            '<iframe$1 loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
          );

        setPost({
          ...post,
          content: processedContent,
          featured_image: post.featured_image,
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Load social media scripts
  useEffect(() => {
    if (post?.content) {
      // Load Twitter widgets if needed
      if (post.content.includes("twitter.com")) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      }

      // Load Instagram embed if needed
      if (post.content.includes("instagram.com")) {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }

      // Load TikTok embed if needed
      if (post.content.includes("tiktok.com")) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [post?.content]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="w-full h-[600px] flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading post...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="w-full h-[600px] flex items-center justify-center">
          <div className="text-gray-500">Post not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-gray-100"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Button>

        {post.featured_image && (
          <div className="aspect-[2/1] w-full overflow-hidden rounded-xl mb-12">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <article className="space-y-4">
          <div className="flex gap-2 mb-4">
            {Object.values(post.categories || {}).map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-600 hover:bg-gray-100"
              >
                {category.name}
              </Badge>
            ))}
          </div>

          <h1
            className="text-4xl font-medium mb-8 text-gray-900 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <div className="flex items-center text-sm text-gray-500 mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString()}
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-medium prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-gray-900 prose-strong:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-li:text-gray-600 prose-li:mb-2 prose-li:text-lg prose-img:rounded-xl prose-img:my-8 prose-hr:my-8 prose-hr:border-gray-100 prose-blockquote:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-6 prose-blockquote:text-xl prose-blockquote:font-light prose-blockquote:not-italic [&_figure]:my-8 [&_figure_img]:rounded-xl [&_figure_figcaption]:text-base [&_figure_figcaption]:text-gray-500 [&_figure_figcaption]:mt-3 [&_.wp-block-image]:my-8 [&_.wp-block-image_img]:rounded-xl [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl [&_iframe]:my-8 [&_.wp-block-embed]:my-8 [&_.wp-block-embed_iframe]:w-full [&_.wp-block-embed_iframe]:aspect-video [&_.wp-block-embed_iframe]:rounded-xl [&_.wp-block-embed_figcaption]:text-base [&_.wp-block-embed_figcaption]:text-gray-500 [&_.wp-block-embed_figcaption]:mt-3 [&_figure.wp-block-embed]:bg-transparent [&_figure.wp-block-embed]:shadow-none [&_.wp-block-embed__wrapper]:shadow-none prose-table:w-full prose-table:border-collapse prose-table:my-6 prose-tr:border-b prose-tr:border-gray-200 prose-td:p-2 prose-td:align-middle prose-th:p-2 prose-th:align-middle prose-th:font-medium prose-th:text-gray-900 prose-td:text-gray-600 [&_.wp-block-table]:my-6 [&_.wp-block-table_table]:w-full [&_.wp-block-table_tr]:border-b [&_.wp-block-table_tr]:border-gray-200 [&_.wp-block-table_td]:p-2 [&_.wp-block-table_td]:align-middle [&_.wp-block-table_th]:p-2 [&_.wp-block-table_th]:align-middle [&_.wp-block-table_th]:font-medium [&_.wp-block-table_th]:text-gray-900 [&_.wp-block-table_td]:text-gray-600 [&_script]:!block [&_style]:!block [&_.twitter-tweet]:!my-8 [&_.instagram-media]:!my-8 [&_.tiktok-embed]:!my-8 [&_iframe.instagram-media]:!min-w-0 [&_iframe.instagram-media]:!w-full [&_iframe.twitter-tweet]:!min-w-0 [&_iframe.twitter-tweet]:!w-full [&_.fb_iframe_widget]:!my-8 [&_.fb_iframe_widget]:!w-full [&_.fb_iframe_widget_span]:!w-full [&_.fb_iframe_widget_span_iframe]:!w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
