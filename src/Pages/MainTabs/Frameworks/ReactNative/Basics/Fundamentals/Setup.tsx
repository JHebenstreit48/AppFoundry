import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const Setup = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native - Project Setup" /> 
        <Notes
        filePath={markdownFilePath}
         />
      </PageLayout>
    </>
  );
};

export default Setup;
