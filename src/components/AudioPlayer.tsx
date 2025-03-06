import {
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
} from 'lucide-react';

interface AudioPlayerProps {
  className?: string;
}

const AudioPlayer = ({ className = '' }: AudioPlayerProps) => {
  return (
    <div className={`bg-black border-t border-zinc-900 px-4 ${className}`}>
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4 w-[30%]">
          {/* NOTE: Image asset should be added here */}
          <div className="w-14 h-14 bg-zinc-800"></div>
          <div className="space-y-1">
            <h4 className="text-white text-sm font-semibold">Song Title</h4>
            <p className="text-sm text-zinc-400 font-semibold">Artist Name</p>
          </div>
        </div>

        <div className="flex flex-col items-center  max-w-[40%] w-full">
          <div className="flex items-center gap-6 mb-2">
            <button className="text-zinc-400 hover:text-white cursor-pointer">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-zinc-400 hover:text-white cursor-pointer">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="hover:scale-105 transition transition-300 h-10 w-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer">
              <Play fill="currentColor" className="w-5 h-5" />
            </button>
            <button className="text-zinc-400 hover:text-white cursor-pointer">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-zinc-400 hover:text-white cursor-pointer">
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 max-w-[220px] w-full hover:cursor-pointer">
            <div className="h-1 flex-1 bg-zinc-600 rounded-full">
              <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-[30%] justify-end">
          <button className="text-white">
            <Volume2 className="w-5 h-5" />
          </button>
          <div className="w-24 h-1 bg-zinc-600 rounded-full hover:cursor-pointer">
            <div className="h-full w-3/5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
