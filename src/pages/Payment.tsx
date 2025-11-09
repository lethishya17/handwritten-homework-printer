import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet, Banknote } from "lucide-react";

const paymentMethods = [
  {
    title: "UPI Payment",
    icon: Smartphone,
    description: "Pay instantly using UPI apps",
    options: ["Google Pay", "PhonePe", "Paytm", "Amazon Pay"],
    color: "from-info/20 to-primary/20"
  },
  {
    title: "Card Payment",
    icon: CreditCard,
    description: "Debit & Credit cards accepted",
    options: ["Visa", "MasterCard", "RuPay", "Amex"],
    color: "from-accent/20 to-warning/20"
  },
  {
    title: "Digital Wallets",
    icon: Wallet,
    description: "Use your favorite wallet",
    options: ["Paytm Wallet", "MobiKwik", "Freecharge", "Airtel Money"],
    color: "from-secondary/20 to-success/20"
  },
  {
    title: "Cash Payment",
    icon: Banknote,
    description: "Pay at the counter",
    options: ["Cash on Delivery", "Counter Payment"],
    color: "from-primary/20 to-secondary/20"
  }
];

export default function Payment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-success/10 to-accent/10 py-16">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 bg-success/20 text-success-foreground px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-4 h-4" />
              <span className="font-semibold">Secure Payments</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Options</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from multiple secure and convenient payment methods
            </p>
          </div>
        </section>

        {/* Payment Methods Grid */}
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {method.options.map((option, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-2 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Security Features */}
        <section className="bg-muted/30 py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Safe & Secure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Encrypted</h3>
                <p className="text-sm text-muted-foreground">All transactions are encrypted with 256-bit SSL</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Verified</h3>
                <p className="text-sm text-muted-foreground">PCI DSS compliant payment gateway</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Protected</h3>
                <p className="text-sm text-muted-foreground">Your payment details are never stored</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Process */}
        <section className="container py-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How Payment Works</CardTitle>
              <CardDescription className="text-center">Simple and hassle-free checkout process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-1">Add to Cart</h4>
                  <p className="text-xs text-muted-foreground">Select your favorite items</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-1">Choose Method</h4>
                  <p className="text-xs text-muted-foreground">Pick your payment option</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-1">Make Payment</h4>
                  <p className="text-xs text-muted-foreground">Complete secure transaction</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-1">Order Confirmed</h4>
                  <p className="text-xs text-muted-foreground">Get instant confirmation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
