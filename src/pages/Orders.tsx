import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

const orders = [
  {
    id: "001",
    customerName: "Arun",
    items: ["Masala Dosa", "Filter Coffee"],
    totalAmount: 85,
    status: "Pending"
  },
  {
    id: "002",
    customerName: "Pooja",
    items: ["Veg Fried Rice"],
    totalAmount: 80,
    status: "Accepted"
  },
  {
    id: "003",
    customerName: "Ravi",
    items: ["Chicken Biryani"],
    totalAmount: 120,
    status: "Rejected"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Pending":
      return (
        <Badge variant="outline" className="gap-1 border-warning text-warning">
          <Clock className="w-3 h-3" />
          Pending
        </Badge>
      );
    case "Accepted":
      return (
        <Badge variant="outline" className="gap-1 border-success text-success">
          <CheckCircle2 className="w-3 h-3" />
          Accepted
        </Badge>
      );
    case "Rejected":
      return (
        <Badge variant="outline" className="gap-1 border-destructive text-destructive">
          <XCircle className="w-3 h-3" />
          Rejected
        </Badge>
      );
    default:
      return null;
  }
};

export default function Orders() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 py-16">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Management</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track and manage your orders in real-time
            </p>
          </div>
        </section>

        {/* Orders Table Section */}
        <section className="container py-16">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>View all orders and their current status</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Desktop Table */}
              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            {order.items.map((item, idx) => (
                              <span key={idx} className="text-sm">{item}</span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">₹{order.totalAmount}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                          <CardDescription>{order.customerName}</CardDescription>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold mb-1">Items:</p>
                        {order.items.map((item, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">• {item}</p>
                        ))}
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm font-semibold">Total: <span className="text-primary">₹{order.totalAmount}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Order Status Info */}
        <section className="container pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-warning/50 bg-warning/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-warning" />
                  </div>
                  <CardTitle>Pending</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your order has been received and is waiting to be processed by our kitchen staff.
                </p>
              </CardContent>
            </Card>

            <Card className="border-success/50 bg-success/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <CardTitle>Accepted</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Great! Your order has been accepted and is being prepared. It will be ready soon.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <CardTitle>Rejected</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sorry, we couldn't process your order. Please contact us for more details.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
