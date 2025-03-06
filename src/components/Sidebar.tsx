import { playlists } from '@/utils/const';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
  return (
    <nav className={`bg-black p-6 ${className}`}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-8">Spotify</h1>
        <ul className="space-y-2">
          <SidebarItem icon={Home} label="Home" />
          <SidebarItem icon={Search} label="Search" />
          <SidebarItem icon={Library} label="Your Library" />
        </ul>
      </div>

      <div className="my-8">
        <ul className="space-y-2">
          <SidebarItem icon={PlusSquare} label="Create Playlist" />
          <SidebarItem icon={Heart} label="Liked Songs" />
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="uppercase text-sm font-bold mb-4">Playlists</h2>
        <ul className="space-y-0.5">
          {playlists.map((playlist, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-zinc-300 hover:text-white text-base block py-1 transition-colors transition-300"
              >
                {playlist}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
