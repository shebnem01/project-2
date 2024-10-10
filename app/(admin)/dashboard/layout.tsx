import Sidebar from "./_components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
     <Sidebar/>
      {children}
    </div>
  );
}
