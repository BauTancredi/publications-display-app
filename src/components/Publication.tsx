import { PublicationModel } from "../models";

interface PublicationProps {
  publication: PublicationModel;
  publishedBy: string;
}

const Publication = ({ publication, publishedBy }: PublicationProps) => {
  return (
    <>
      <div className="my-3 rounded-lg border p-3">
        <h2 className="text-3xl">{publication.title}</h2>
        <p className="my-3">{publication.body}</p>
        <p className="italic">Published by {publishedBy}</p>
      </div>
    </>
  );
};

export default Publication;
