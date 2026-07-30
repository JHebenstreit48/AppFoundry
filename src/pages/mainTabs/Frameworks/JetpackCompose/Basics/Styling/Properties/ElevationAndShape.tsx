import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ElevationAndShape = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Properties/ElevationAndShape';

  return (
    <>
      <PageLayout>        <PageTitle title="Elevation & Shape" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ElevationAndShape;
