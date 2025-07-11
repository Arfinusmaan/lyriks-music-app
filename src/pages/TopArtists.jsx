import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/deezerApi';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.artists?.data?.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;