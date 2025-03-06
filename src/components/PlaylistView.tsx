import { songs } from '@/utils/const';
import Image from 'next/image';
import { Play } from 'lucide-react';

const PlaylistView = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-6 mb-8">
        <div className="shadow-xl">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/placeholder.svg"
              alt="Playlist Cover"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-white uppercase font-bold">Playlist</p>
          <h1 className="text-5xl font-bold text-white">Daily Mix 1</h1>
          <p className="text-sm text-zinc-300">
            Created by Lauren Dorman - 50 songs, 3 hr 25 min
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-8 mb-8">
        <div className="w-[47%]">
          <button className="py-3 px-7 flex gap-2 items-center text-black justify-center rounded-full bg-green-500 hover:scale-105 transition-all duration-300 ease-out font-semibold cursor-pointer">
            <Play fill="currentColor" className="w-4 h-4" /> Play
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="table w-full table-fixed border-collapse">
          <div className="table-header-group">
            <div className="table-row text-sm text-zinc-200 font-bold uppercase border-b border-zinc-700/50">
              <div className="table-cell w-[2.5%]  pl-2 pb-2">#</div>
              <div className="table-cell w-[47.5%]  pb-2">Title</div>
              <div className="table-cell w-[30%]  pb-2">Album</div>
              <div className="table-cell w-[20%] pb-2 pr-2">Duration</div>
            </div>
          </div>

          <div className="table-row-group">
            {songs.map((song, index) => (
              <div
                key={index}
                className="table-row group hover:bg-white/10 text-zinc-300 hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer"
              >
                <div className="table-cell text-sm align-middle pl-2">
                  <div className="flex items-center">
                    <span className="group-hover:hidden">{index + 1}</span>
                    <Play
                      className="w-4 h-4 hidden group-hover:block"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="table-cell py-3 align-middle">
                  <div className="flex items-center gap-3">
                    <Image
                      src={song.image}
                      alt={`${song.title} by ${song.artist} Cover Art`}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="text-sm text-white font-semibold">
                        {song.title}
                      </p>
                      <p className="text-sm text-zinc-300">{song.artist}</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm table-cell py-4 align-middle">
                  {song.album}
                </div>
                <div className="text-sm table-cell py-4 pr-2 align-middle">
                  {song.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
