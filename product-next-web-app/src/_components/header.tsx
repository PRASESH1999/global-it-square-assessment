export async function getServerSideProps(context) {
  const { req, res } = context; // Access HTTP request/response
  const userId = req.cookies.userId; // Example: use cookies or headers
  const resData = await fetch(`https://api.example.com/user/${userId}`);
  const data = await resData.json();

  return {
    props: {
      user: data, // Pass data to the page as props
    },
  };
}
export function Header(props: any) {
  return (
    <header className="bg-primary shadow-elevation-2">
      <div className="container px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* <button className="mr-4 md:hidden">
            <Menu size={24} />
          </button> */}
          <h1 className="text-xl font-medium">Product Showcase</h1>
        </div>
      </div>
    </header>
  );
}
