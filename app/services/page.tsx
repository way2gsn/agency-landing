"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Camera, Video, Film, Smartphone, Palette, Globe } from "lucide-react"

// Custom utility class for hiding scrollbars while allowing scrolling
const scrollbarHideStyle = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

export default function PricingPage() {
  return (
    <>
      <style jsx global>
        {scrollbarHideStyle}
      </style>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Filmmaking & Creative Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional visual content creation to elevate your brand and captivate your audience
          </p>
        </div>

        <Tabs defaultValue="product-photography" className="w-full p-4">
          <div className="relative mb-8 w-full overflow-hidden">
            <div className="overflow-x-auto p-4 scrollbar-hide">
              <TabsList className="inline-flex min-w-full w-max ">
                <TabsTrigger
                  value="product-photography"
                  className="flex flex-col items-center gap-2 py-3 px-4 min-w-[140px]"
                >
                  <Camera className="h-5 w-5" />
                  <span>Product Photography</span>
                </TabsTrigger>
                <TabsTrigger
                  value="product-videos"
                  className="flex flex-col items-center gap-2 py-3 px-4 min-w-[140px]"
                >
                  <Video className="h-5 w-5" />
                  <span>Product Videos</span>
                </TabsTrigger>
                <TabsTrigger value="short-form" className="flex flex-col items-center gap-2 py-3 px-4 min-w-[140px]">
                  <Smartphone className="h-5 w-5" />
                  <span>Short-Form Content</span>
                </TabsTrigger>
                <TabsTrigger
                  value="cinematography"
                  className="flex flex-col items-center gap-2 py-3 px-4 min-w-[140px]"
                >
                  <Film className="h-5 w-5" />
                  <span>Cinematography</span>
                </TabsTrigger>
                <TabsTrigger value="brand-ads" className="flex flex-col items-center gap-2 py-3 px-4 min-w-[140px]">
                  <Palette className="h-5 w-5" />
                  <span>Brand Spec Ads</span>
                </TabsTrigger>
                <TabsTrigger value="web-branding" className="flex flex-col items-center gap-2 py-3 px-4 min-w-[140px]">
                  <Globe className="h-5 w-5" />
                  <span>Web & Branding</span>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>

          {/* Product Photography */}
          <TabsContent value="product-photography">
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Basic Package"
                price="₹5,000"
                description="Perfect for e-commerce, social media, and catalogs"
                features={[
                  "Up to 10 product shots",
                  "White/solid background",
                  "Basic retouching and color correction",
                  "Delivery: 3-5 days",
                ]}
              />
              <PricingCard
                title="Standard Package"
                price="₹8,000"
                description="Perfect for e-commerce, social media, and catalogs"
                popular={true}
                features={[
                  "20-30 product shots",
                  "Creative backgrounds/styling",
                  "Advanced retouching and color grading",
                  "Lifestyle product shots (optional)",
                  "Delivery: 5-7 days",
                ]}
              />
              <PricingCard
                title="Premium Package"
                price="₹12,000"
                description="Perfect for e-commerce, social media, and catalogs"
                features={[
                  "40+ high-end product shots",
                  "Full creative direction + mood board",
                  "Advanced lighting setups + props",
                  "Composite editing + detailed retouching",
                  "Delivery: 7-10 days",
                ]}
              />
            </div>
          </TabsContent>

          {/* Product Videos */}
          <TabsContent value="product-videos">
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Basic Package"
                price="₹7,000"
                description="Cinematic videos to showcase your product's features and vibe"
                features={[
                  "30-60 second product video",
                  "Single location, minimal setup",
                  "Basic editing and color correction",
                  "Royalty-free background music",
                  "Delivery: 5-7 days",
                ]}
              />
              <PricingCard
                title="Standard Package"
                price="₹12,000"
                description="Cinematic videos to showcase your product's features and vibe"
                popular={true}
                features={[
                  "1-2 minute product showcase",
                  "Multi-angle shots + creative setups",
                  "Advanced editing + color grading",
                  "Sound design and light motion graphics",
                  "1 round of revisions",
                  "Delivery: 7-10 days",
                ]}
              />
              <PricingCard
                title="Premium Package"
                price="₹18,000"
                description="Cinematic videos to showcase your product's features and vibe"
                features={[
                  "High-end cinematic product ad (1-3 min)",
                  "Storyboarding + creative direction",
                  "Professional gear (stabilizers, macro, drones)",
                  "Advanced editing + VFX + sound design",
                  "2 rounds of revisions",
                  "Delivery: 10-14 days",
                ]}
              />
            </div>
          </TabsContent>

          {/* Short-Form Content */}
          <TabsContent value="short-form">
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Basic"
                price="₹3,000"
                description="Content that grabs attention and drives engagement"
                features={[
                  "1 short-form video (15-30s)",
                  "Simple transitions + text overlays",
                  "Basic color correction",
                  "Delivery: 2-3 days",
                ]}
              />
              <PricingCard
                title="Standard"
                price="₹8,000"
                description="Content that grabs attention and drives engagement"
                popular={true}
                features={[
                  "3-5 short-form videos",
                  "Creative cuts, transitions + sound design",
                  "Advanced editing + color grading",
                  "Delivery: 5-7 days",
                ]}
              />
              <PricingCard
                title="Premium"
                price="₹15,000"
                description="Content that grabs attention and drives engagement"
                features={[
                  "10 high-quality short videos",
                  "Custom creative direction + scripting",
                  "Advanced VFX, motion graphics + sound design",
                  "Delivery: 7-10 days",
                ]}
              />
            </div>
          </TabsContent>

          {/* Cinematography */}
          <TabsContent value="cinematography">
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Half-Day Shoot"
                price="₹10,000"
                description="High-end, cinematic visual storytelling"
                features={[
                  "4-hour shoot",
                  "Professional camera + stabilizers",
                  "Raw footage only (optional editing add-on)",
                ]}
              />
              <PricingCard
                title="Full-Day Shoot"
                price="₹18,000"
                description="High-end, cinematic visual storytelling"
                popular={true}
                features={["8-hour shoot", "Multi-location + lighting setups", "Raw footage + basic edit preview"]}
              />
              <PricingCard
                title="Cinematic Package"
                price="₹25,000"
                description="High-end, cinematic visual storytelling"
                features={[
                  "Full-day shoot + creative direction",
                  "Drone + professional gear + lighting crew",
                  "Advanced editing + sound design",
                  "Delivery: 10-14 days",
                ]}
              />
            </div>
          </TabsContent>

          {/* Brand Spec Ads */}
          <TabsContent value="brand-ads">
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Basic"
                price="₹8,000"
                description="High-concept ads that showcase your product/service like a big-budget commercial"
                features={[
                  "30-60s brand ad",
                  "Creative product showcase",
                  "Basic editing + sound design",
                  "Delivery: 5-7 days",
                ]}
              />
              <PricingCard
                title="Standard"
                price="₹15,000"
                description="High-concept ads that showcase your product/service like a big-budget commercial"
                popular={true}
                features={[
                  "1-2 min high-concept ad",
                  "Storyboarding + multi-location shoot",
                  "Advanced editing + color grading",
                  "Professional sound design + VFX",
                  "Delivery: 7-10 days",
                ]}
              />
              <PricingCard
                title="Premium"
                price="₹25,000"
                description="High-concept ads that showcase your product/service like a big-budget commercial"
                features={[
                  "2-3 min full commercial",
                  "Scriptwriting, creative direction + mood board",
                  "Full production crew (lighting, camera, styling)",
                  "Advanced post-production + VFX",
                  "Delivery: 14-21 days",
                ]}
              />
            </div>
          </TabsContent>

          {/* Website Development & Branding */}
          <TabsContent value="web-branding">
            <div className="grid md:grid-cols-3 gap-6">
              <PricingCard
                title="Website Basic"
                price="₹8,000"
                description="Complete digital presence for your business"
                features={[
                  "1-5 page website (Home, About, Contact)",
                  "Mobile-friendly + SEO setup",
                  "Basic design + CMS integration (WordPress/Wix)",
                ]}
              />
              <PricingCard
                title="Website Standard"
                price="₹15,000"
                description="Complete digital presence for your business"
                popular={true}
                features={[
                  "5-10 page website",
                  "Custom design + animations",
                  "E-commerce setup (optional)",
                  "SEO optimization + fast load times",
                ]}
              />
              <PricingCard
                title="Website Premium"
                price="₹25,000"
                description="Complete digital presence for your business"
                features={[
                  "Custom-coded website (HTML/CSS/JavaScript)",
                  "Advanced UI/UX design + animations",
                  "Full e-commerce setup + payment gateways",
                  "Brand identity integration",
                ]}
              />
            </div>
            <div className="mt-8">
              <PricingCard
                title="Branding Package"
                price="₹10,000"
                description="Complete digital presence for your business"
                features={[
                  "Logo design + color palette",
                  "Brand guidelines document",
                  "Social media kit (banners, profile pics)",
                  "Custom typography + icons",
                ]}
                className="max-w-md mx-auto"
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Add-ons Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Add-ons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AddOnCard title="Extra location" price="₹2,000" />
            <AddOnCard title="Drone footage" price="₹5,000" />
            <AddOnCard title="Additional revision" price="₹1,500" />
            <AddOnCard title="Fast-track delivery" price="₹3,000" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to elevate your visual content?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote.
          </p>
          <Button size="lg" className="px-8">
            Get in Touch
          </Button>
        </div>
      </div>
    </>
  )
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  className?: string
}

function PricingCard({ title, price, description, features, popular, className }: PricingCardProps) {
  return (
    <Card className={`relative ${popular ? "border-primary shadow-lg" : ""} ${className}`}>
      {popular && <Badge className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 px-3 py-1">Popular</Badge>}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  )
}

interface AddOnCardProps {
  title: string
  price: string
}

function AddOnCard({ title, price }: AddOnCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{price}</p>
      </CardContent>
    </Card>
  )
}

