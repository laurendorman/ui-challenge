import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import AudioPlayer from '../components/AudioPlayer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-black select-none">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar className="w-60 flex-shrink-0" />
        <main className="bg-gradient-to-b from-blue-900 to-black w-full">
          {children}
        </main>
      </div>
      <AudioPlayer className="h-24 flex-shrink-0" />
    </div>
  );
};

export default MainLayout;
