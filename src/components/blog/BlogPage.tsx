import Header from "../Header";
import Footer from "../Footer";
import BlogList from "./BlogList";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-medium mb-4">
              Watch Repair Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights, tips, and guides about watch repair and
              maintenance
            </p>
          </div>
          <BlogList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
