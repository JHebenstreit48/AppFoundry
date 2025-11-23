import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Props = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Props';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Props" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Props;