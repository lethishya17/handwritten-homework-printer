import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, Percent } from "lucide-react";

const offers = [
  {
    title: "Combo Offer",
    description: "Buy 1 Dosa + 1 Coffee for ₹70 (Save ₹20)",
    validity: "Every Morning 7AM - 10AM",
    discount: "23% OFF",
    icon: "🌅"
  },
  {
    title: "Lunch Special",
    description: "Free Dessert with every Thali order",
    validity: "12PM - 3PM",
    discount: "Free Item",
    icon: "🍛"
  },
  {
    title: "Evening Snacks",
    description: "Tea & Vadai Combo for ₹30",
    validity: "4PM - 6PM",
    discount: "Special Price",
    icon: "☕"
  }
];

export default function Offers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 py-16">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <Tag className="w-4 h-4" />
              <span className="font-semibold">Special Offers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Amazing Deals & Discounts</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Save more on your favorite meals with our daily special offers!
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {offer.discount}
                </Badge>
                
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-4xl">{offer.icon}</span>
                  </div>
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4" />
                    <span>{offer.validity}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Avail Section */}
        <section className="bg-muted/30 py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">How to Avail Offers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Browse Offers</h3>
                <p className="text-sm text-muted-foreground">Check our current offers and select your favorite deal</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Place Order</h3>
                <p className="text-sm text-muted-foreground">Add items to cart during the offer validity time</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Enjoy Savings</h3>
                <p className="text-sm text-muted-foreground">Get instant discount applied at checkout automatically</p>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Deals Banner */}
        <section className="container py-16">
          <Card className="bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Percent className="w-6 h-6" />
                  <span className="font-semibold">Daily Deals</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Subscribe for Exclusive Offers!
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl">
                  Get notified about our latest deals, combo offers, and special discounts directly to your phone.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
