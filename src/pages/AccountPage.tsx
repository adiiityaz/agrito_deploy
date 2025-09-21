import React, { useState } from 'react';
import { User, Package, Settings, Heart, MapPin, CreditCard, LogOut, Edit3, Bell, Shield, Leaf, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Farm Street, Agriculture City, AC 12345',
    bio: 'Passionate about sustainable farming and organic agriculture.'
  });

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.99,
      items: ['Organic Tomato Seeds', 'Garden Tools Set']
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 156.50,
      items: ['Neem Fertilizer', 'Wheat Seeds', 'Irrigation Kit']
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 45.75,
      items: ['Basmati Rice']
    }
  ];

  const mockWishlist = [
    {
      id: 1,
      name: 'Premium Garden Hose',
      price: 29.99,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Organic Compost Mix',
      price: 19.99,
      image: '/placeholder.svg'
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-success/20 text-success border-success/30';
      case 'Shipped': return 'bg-primary/20 text-primary border-primary/30';
      case 'Processing': return 'bg-warning/20 text-warning-foreground border-warning/30';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-foreground font-medium">My Account</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-section mb-2">My Account</h1>
          <p className="text-description">
            Manage your profile, track orders, and customize your preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-card border shadow-sm">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Package className="h-4 w-4 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="card-product">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>Update your personal details and contact information</CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={isEditing ? "btn-hero" : "btn-outline"}
                  >
                    {isEditing ? (
                      <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border">
                  <Avatar className="h-24 w-24 ring-4 ring-primary/20">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                      {userInfo.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{userInfo.name}</h3>
                    <p className="text-muted-foreground mb-3">{userInfo.email}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Leaf className="h-4 w-4 text-success" />
                        <span>Premium Member</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-warning" />
                        <span>5 Orders</span>
                      </div>
                    </div>
                    {isEditing && (
                      <Button variant="outline" size="sm" className="mt-3 btn-outline">
                        Change Photo
                      </Button>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      disabled={!isEditing}
                      className="hover-lift"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      disabled={!isEditing}
                      className="hover-lift"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      disabled={!isEditing}
                      className="hover-lift"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium text-foreground">Address</Label>
                    <Input
                      id="address"
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                      disabled={!isEditing}
                      className="hover-lift"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-sm font-medium text-foreground">Bio</Label>
                  <Textarea
                    id="bio"
                    value={userInfo.bio}
                    onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                    disabled={!isEditing}
                    rows={3}
                    className="hover-lift"
                    placeholder="Tell us about your farming experience and interests..."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="card-product">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Order History
                </CardTitle>
                <CardDescription>Track your recent orders and their status</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {mockOrders.map((order, index) => (
                    <div key={order.id} className={`border-b last:border-b-0 p-6 hover:bg-muted/30 transition-colors group ${index === 0 ? 'bg-gradient-to-r from-success/5 to-transparent' : ''}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Package className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Order {order.id}</h3>
                            <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-foreground">₹{order.total}</p>
                          <Badge className={`${getStatusColor(order.status)} hover-lift`}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="ml-16">
                        <p className="text-sm text-muted-foreground mb-4">
                          <span className="font-medium">Items:</span> {order.items.join(', ')}
                        </p>
                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm" className="btn-outline">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="hover-lift">
                            <Truck className="h-4 w-4 mr-1" />
                            Track Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <Card className="card-product">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  My Wishlist
                </CardTitle>
                <CardDescription>Items you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockWishlist.map((item) => (
                    <div key={item.id} className="card-product group">
                      <div className="aspect-square bg-muted/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-lg font-bold text-success mb-4">₹{item.price}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 btn-hero">
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm" className="hover-lift">
                            <Heart className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notification Settings */}
              <Card className="card-product">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Notifications
                  </CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                    </div>
                    <Button variant="outline" size="sm" className="btn-outline">On</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">SMS Notifications</p>
                      <p className="text-sm text-muted-foreground">Get text updates on order status</p>
                    </div>
                    <Button variant="outline" size="sm" className="btn-outline">Off</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="card-product">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security
                  </CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start btn-outline hover-lift">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start btn-outline hover-lift">
                    <MapPin className="h-4 w-4 mr-2" />
                    Manage Addresses
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Danger Zone */}
            <Card className="card-product border-destructive/20 bg-destructive/5">
              <CardHeader className="border-b border-destructive/20">
                <CardTitle className="text-destructive flex items-center gap-2">
                  <LogOut className="h-5 w-5" />
                  Danger Zone
                </CardTitle>
                <CardDescription>Irreversible and destructive actions</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button variant="destructive" className="w-full justify-start hover-lift">
                  <LogOut className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AccountPage;
