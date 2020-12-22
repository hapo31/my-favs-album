import React from "react";
import { PrismaClient, Album } from "@prisma/client";
import { GetStaticProps } from "next";

const Index = (props: Props) => {
  return (
    <div>
      <h1>helloooooooooooooooo</h1>
      {props.albums.map((album, index) => (
        <div key={`album-${index}`}>
          <img src={album.mediaUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Index;

type Props = {
  albums: Album[];
};
export const getStaticProps: GetStaticProps = async (context) => {
  const client = new PrismaClient();

  const result = (await client.album.findMany()).map((result) => ({
    ...result,
    createdAt: result.createdAt.getTime(),
  }));

  return { props: { albums: result } };
};
