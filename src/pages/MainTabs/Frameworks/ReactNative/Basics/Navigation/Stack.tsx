import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Stack = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/Navigation/Stack';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Stack Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Stack;