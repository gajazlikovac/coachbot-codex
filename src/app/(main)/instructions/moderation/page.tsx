import { getModerationRules } from '@/server/actions/instructionsActions';
import ComingSoon from '@/shared/CoomingSoon';
import ModerationInstructions from '../_components/ModerationInstructions';

export default async function InstructionsPage() {
  const moderations$ = getModerationRules();

  return (
    <>
      <ComingSoon />
      <ModerationInstructions moderations$={moderations$} />
    </>
  );
}
