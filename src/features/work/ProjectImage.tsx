export const ProjectImage = ({
  image1,
  image2
}: {
  image1: string;
  image2: string;
}) => {
  return (
    <>
      <div className="relative flex flex-col gap-4">
        <img src={image1} alt="Screenshot of the project" />
        <img src={image2} alt="Screenshot of the project" />
      </div>
    </>
  );
};
