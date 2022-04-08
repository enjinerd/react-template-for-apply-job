import { Footer } from './Footer';
import { Header } from './Header';

const LayoutRoot = ({ children }) => (
  <main className="bg-gray-100 flex flex-col min-h-screen w-full dark:bg-dark">
    <Header />
    {children}
    <Footer />
  </main>
);

export default LayoutRoot;
