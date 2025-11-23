import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Stack = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/Navigation/Stack';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Stack Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Stack;