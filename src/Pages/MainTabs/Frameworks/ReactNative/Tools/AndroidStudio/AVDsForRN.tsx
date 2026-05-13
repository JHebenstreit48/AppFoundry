import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AVDsForRN = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/AndroidStudio/AVDsForRN';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AVDs for RN" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AVDsForRN;
