import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InputsAndFocus = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/InputsAndFocus';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Handling Inputs & Focus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InputsAndFocus;