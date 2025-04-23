export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} Vinit Portfolio. OPEN TO WORK.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Designed & Built with Passion 
          </p>
        </div>
      </div>
    </footer>
  );
}