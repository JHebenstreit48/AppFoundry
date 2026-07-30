import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSXTSX = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/JSXTSXEvent/JSXAndTSX';

  return (
    <>
      <PageLayout>        <PageTitle title=" React Native Core Concepts - JSX & TSX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSXTSX;