// Update this page (the content is just a fallback if you fail to update the page)

import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar is always responsive now */}
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome to Your Blank App
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Start building your amazing project here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
