import { isSignedIn } from '@/echo';
import AetherScopeClient from './aetherscope-client';
import GridSmallBackground from '@/components/ui/grid-small-background';
import SignInCard from '@/components/ui/sign-in-card';

export default async function AetherScope() {
  const signedIn = await isSignedIn();

  if (!signedIn) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-white p-4 dark:bg-black">
        <GridSmallBackground />
        <div className="relative z-10">
          <SignInCard />
        </div>
      </div>
    );
  }

  return <AetherScopeClient />;
}
