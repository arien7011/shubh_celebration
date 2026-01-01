import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Copy,
  Tag,
  ArrowRight
} from "lucide-react";
import { SEO } from "@/components/shared/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/constants/blog";
import { useToast } from "@/hooks/use-toast";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The article you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/blog")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  // Share functions
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link Copied!",
      description: "Article link has been copied to clipboard.",
    });
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`
    }
  ];

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        image={post.image}
      />

      {/* Hero */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-xs">{post.author.role}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:marker:text-primary
                  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                  prose-img:rounded-xl
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <Separator className="my-10" />

              {/* Tags */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <Link key={tag} to={`/blog?tag=${tag}`}>
                    <Badge variant="outline" className="hover:bg-primary/10">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                <span className="font-medium flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share:
                </span>
                <div className="flex gap-2">
                  {shareLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      title={`Share on ${link.name}`}
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                  <button
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    title="Copy Link"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{post.author.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{post.author.role}</p>
                      <p className="text-sm text-muted-foreground">
                        With years of experience in event decoration and management, 
                        {post.author.name.split(' ')[0]} brings creative insights and practical 
                        tips to help you plan perfect celebrations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Quick Navigation</h3>
                    <nav className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-left" asChild>
                        <Link to="/services">Our Services</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-left" asChild>
                        <Link to="/packages">View Packages</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-left" asChild>
                        <Link to="/gallery">Photo Gallery</Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-left" asChild>
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </nav>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Need Help Planning?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Get a free consultation with our event experts today!
                    </p>
                    <Button variant="secondary" asChild className="w-full">
                      <Link to="/contact">Get Free Quote</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((related) => (
                          <Link 
                            key={related.slug} 
                            to={`/blog/${related.slug}`}
                            className="flex gap-3 group"
                          >
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {related.readTime}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts Grid */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">More Articles You Might Like</h2>
              <Link to="/blog">
                <Button variant="outline">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${related.slug}`}>
                    <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span>{related.date}</span>
                          <span>•</span>
                          <span>{related.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8">
        <div className="container">
          <Button variant="outline" onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </section>
    </>
  );
}
