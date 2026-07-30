import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Drawer = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/Navigation/Drawer';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Drawer Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Drawer;