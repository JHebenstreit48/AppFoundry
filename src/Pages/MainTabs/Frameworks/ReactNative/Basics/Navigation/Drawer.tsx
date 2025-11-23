import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Drawer = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/Navigation/Drawer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Drawer Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Drawer;