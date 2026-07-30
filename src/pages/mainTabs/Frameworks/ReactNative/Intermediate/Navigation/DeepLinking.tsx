import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DeepLinking = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Navigation/DeepLinking';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Deep Linking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeepLinking;