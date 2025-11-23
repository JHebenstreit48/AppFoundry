import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeepLinking = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Navigation/DeepLinking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Deep Linking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeepLinking;