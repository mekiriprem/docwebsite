import React from "react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TestTube, Clock, Shield, Truck, Star, Calendar, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useNavigate } from "react-router-dom";

const labTests = [
  {
    id: "1",
    name: "Complete Blood Count (CBC)",
    description: "Comprehensive blood analysis including RBC, WBC, platelets",
    price: 299,
    originalPrice: 399,
    discount: 25,
    preparationTime: "No fasting required",
    reportTime: "Same day",
    rating: 4.8,
    reviews: 1250,
    inStock: true,
  },
  {
    id: "2",
    name: "Lipid Profile",
    description: "Cholesterol and triglyceride levels assessment",
    price: 449,
    originalPrice: 599,
    discount: 25,
    preparationTime: "12 hours fasting",
    reportTime: "Same day",
    rating: 4.7,
    reviews: 980,
    inStock: true,
  },
  {
    id: "3",
    name: "Thyroid Function Test",
    description: "TSH, T3, T4 levels to assess thyroid health",
    price: 599,
    originalPrice: 799,
    discount: 25,
    preparationTime: "No fasting required",
    reportTime: "Next day",
    rating: 4.9,
    reviews: 2100,
    inStock: true,
  },
];

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (testId: string) => {
    addToCart(testId);
    navigate("/cart");
  };

  const handleBookTest = (testId: string) => {
    navigate(`/book-test/${testId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Lab Tests & Diagnostics
            </h1>
            <p className="text-lg text-gray-600">
              Book lab tests at home or visit our centers
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search for tests, packages, or health conditions..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <TestTube className="h-8 w-8 text-[#007E85]" />
              <div>
                <div className="font-semibold text-sm">Certified Labs</div>
                <div className="text-xs text-gray-600">NABL accredited</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Truck className="h-8 w-8 text-green-600" />
              <div>
                <div className="font-semibold text-sm">Home Collection</div>
                <div className="text-xs text-gray-600">At your convenience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-purple-600" />
              <div>
                <div className="font-semibold text-sm">Quick Reports</div>
                <div className="text-xs text-gray-600">Same day results</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-orange-600" />
              <div>
                <div className="font flurry font-semibold text-sm">Safe & Hygienic</div>
                <div className="text-xs text-gray-600">100% sterile process</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labTests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-green-600">
                      {test.discount}% OFF
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{test.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{test.name}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#007E85]">₹{test.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{test.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>Preparation: {test.preparationTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TestTube className="h-3 w-3" />
                        <span>Report: {test.reportTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleAddToCart(test.id)}
                      disabled={!test.inStock}
                      className="w-full bg-[#007E85] hover:bg-[#006A6F]"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => handleBookTest(test.id)}
                      variant="outline"
                      className="w-full"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LabTests;