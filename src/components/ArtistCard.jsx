import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${artist?.id}`)}
    >
      <img
        alt="artist_img"
        src={artist?.picture_medium}
        className="w-full h-56 rounded-lg object-cover"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate text-center">
        {artist?.name}
      </p>
    </div>
  );
};

export default ArtistCard;