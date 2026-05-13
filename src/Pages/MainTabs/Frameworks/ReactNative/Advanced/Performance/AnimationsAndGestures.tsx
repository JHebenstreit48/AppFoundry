import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AnimationsAndGestures = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Performance/AnimationsAndGestures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Animations & Gestures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnimationsAndGestures;
