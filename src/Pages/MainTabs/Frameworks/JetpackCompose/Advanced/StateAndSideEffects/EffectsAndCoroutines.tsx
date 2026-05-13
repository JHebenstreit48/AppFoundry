import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EffectsAndCoroutines = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/StateAndSideEffects/EffectsAndCoroutines';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Effects & Coroutines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EffectsAndCoroutines;
