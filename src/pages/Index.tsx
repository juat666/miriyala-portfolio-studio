// Update this page (the content is just a fallback if you fail to update the page)

import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
