import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AVDsForRN = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/AndroidStudio/AVDsForRN';

  return (
    <>
      <PageLayout>        <PageTitle title="AVDs for RN" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AVDsForRN;
