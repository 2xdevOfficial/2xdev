import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header/Header';
import { Footer } from '../components/layout/Footer/Footer';

export function RootLayout() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
