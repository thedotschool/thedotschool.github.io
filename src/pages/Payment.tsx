import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/components/Logo";
import { Shield, Lock, CreditCard, CheckCircle2, Sparkles } from "lucide-react";

const courses = [
  { id: "data-analysis", name: "Data Analysis", price: 70000 },
  { id: "frontend-react", name: "Frontend Web Development (React)", price: 70000 },
  { id: "product-design", name: "Product Design", price: 70000 },
  { id: "motion-design", name: "Motion Design", price: 70000 },
];

const Payment = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [amount, setAmount] = useState<number | "">("");

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId);
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      setAmount(course.price);
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-african opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gold/10 rounded-full blur-2xl" />
      
      {/* Header */}
      <header className="relative z-10 py-6 px-6 md:px-12">
        <Logo />
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-card/95 backdrop-blur-xl rounded-3xl shadow-elevated p-8 md:p-10 border border-border/50 relative overflow-hidden">
                {/* Card Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                      <CreditCard className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                        Make Payment
                      </h1>
                      <p className="text-muted-foreground text-sm">Secure enrollment payment</p>
                    </div>
                  </div>

                  {/* Form */}
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground font-medium flex items-center gap-1">
                        Full name <span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="h-12 bg-background/50 border-border/60 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-1">
                        Email <span className="text-secondary">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 bg-background/50 border-border/60 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-foreground font-medium flex items-center gap-1">
                        Course <span className="text-secondary">*</span>
                      </Label>
                      <Select value={selectedCourse} onValueChange={handleCourseChange}>
                        <SelectTrigger className="h-12 bg-background/50 border-border/60 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border rounded-xl">
                          {courses.map((course) => (
                            <SelectItem 
                              key={course.id} 
                              value={course.id}
                              className="focus:bg-accent/20 rounded-lg"
                            >
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount" className="text-foreground font-medium flex items-center gap-1">
                        Amount <span className="text-secondary">*</span>
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">₦</span>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                          className="h-14 pl-8 bg-accent/10 border-2 border-accent/50 focus:border-accent focus:ring-accent/20 rounded-xl text-xl font-bold text-foreground transition-all duration-300"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mt-4"
                    >
                      <Lock className="w-5 h-5 mr-2" />
                      Pay Securely
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div className="order-1 lg:order-2 text-primary-foreground space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Secure Payment Portal</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Start Your Tech<br />
                  <span className="text-gradient">Journey Today</span>
                </h2>
                <p className="text-primary-foreground/80 text-lg max-w-md">
                  Invest in your future with world-class tech education. Your payment is protected with bank-level security.
                </p>
              </div>

              {/* Security Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Secure Payment</h3>
                    <p className="text-sm text-primary-foreground/70">256-bit SSL encryption</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-accent ml-auto" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                    <Lock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Data Protection</h3>
                    <p className="text-sm text-primary-foreground/70">Your data is never shared</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-accent ml-auto" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
                  <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center shadow-lg">
                    <CreditCard className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">Instant Access</h3>
                    <p className="text-sm text-primary-foreground/70">Get enrolled immediately</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-accent ml-auto" />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary border-2 border-primary flex items-center justify-center text-xs font-bold text-primary-foreground"
                    >
                      {i === 1 && "👨‍💻"}
                      {i === 2 && "👩‍💻"}
                      {i === 3 && "🧑‍💻"}
                      {i === 4 && "👨‍🎓"}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-primary-foreground/80">
                  <span className="font-bold text-accent">500+</span> students already enrolled
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} The dotSchool. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Payment;
