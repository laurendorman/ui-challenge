import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  iconClassName?: string;
}

const SidebarItem = ({ icon: Icon, label }: SidebarItemProps) => {
  return (
    <li>
      {/* NOTE: I would include onClick handler here or a router link, as needed */}
      <a
        href="#"
        className="text-zinc-300 hover:text-white flex items-center gap-3 transition-colors transition-300"
      >
        <Icon />
        {label}
      </a>
    </li>
  );
};

export default SidebarItem;
