import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Home,
  Warehouse,
  Shield,
  Hammer,
  CheckCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-slate-900" />
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                  Est. 2018
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
                Iron & Steel Solutions
              </h1>
              <p className="text-xl text-slate-600 max-w-lg">
                From industrial complexes to custom barndominiums, we bring 25+
                years of engineering excellence to every project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/services">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Explore Our Services
                  <Building2 className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-900 text-slate-900 hover:bg-slate-50 bg-white"
              >
                Get a Quote
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-slate-900" />
                <div>
                  <h3 className="font-semibold text-slate-900">Engineer-Led</h3>
                  <p className="text-sm text-slate-600">Expert Design</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Hammer className="w-8 h-8 text-slate-900" />
                <div>
                  <h3 className="font-semibold text-slate-900">Full-Service</h3>
                  <p className="text-sm text-slate-600">Design to Build</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Tabs */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-lg">
            <Tabs defaultValue="commercial" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="commercial">
                  <Building2 className="w-4 h-4 mr-2" />
                  Commercial
                </TabsTrigger>
                <TabsTrigger value="residential">
                  <Home className="w-4 h-4 mr-2" />
                  Residential
                </TabsTrigger>
                <TabsTrigger value="barndominiums">
                  <Warehouse className="w-4 h-4 mr-2" />
                  Barndominiums
                </TabsTrigger>
              </TabsList>

              <TabsContent value="commercial">
                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-lg font-semibold">
                      Commercial & Industrial
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Structural Steel Erection",
                        "Custom Steel Fabrication",
                        "Steel Building Solutions",
                        "Project Management",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="residential">
                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-lg font-semibold">Residential Steel</h3>
                    <ul className="space-y-2">
                      {[
                        "Custom Home Structures",
                        "Steel Frame Houses",
                        "Modern Design Integration",
                        "Durability Focus",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="barndominiums">
                <Card className="border-0 bg-white/70 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="text-lg font-semibold">
                      Custom Barndominiums
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Complete Design Services",
                        "Efficient Construction",
                        "Customizable Layouts",
                        "Modern Amenities",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
