import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// metadata estatica
export const metadata = {
  title: "e-AutoFram",
  description: "Venta en respuestos y accesorios de vehiculos en linea",
  keywords: ["autofram", "repuestos", "accesorios", "autos", "baterias", "neumaticos", "online", ],
  openGraph: { // extension para el uso de redes sociales.
    title: "e-AutoFram",
    description: "AutoFram ahora con su tienda online",
    type: "website",
    publishedTime: "2023-01-01T00:00:00Z",
    authors: ["lubiano83"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
};