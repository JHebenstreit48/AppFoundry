import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AnimationsAndGestures = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Performance/AnimationsAndGestures';

  return (
    <>
      <PageLayout>        <PageTitle title="Animations & Gestures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnimationsAndGestures;
