import ApplicationApproved from "../ApplicationApproved";
import ApplicationComplete from "../ApplicationComplete";
import FinalizingInvite from "../FinalizingInvite";
import MicrodepositFailure from "../MicrodepositFailure";
import StudentDispersed from "../StudentDispersed";

export function applicationApproved() {
  return <ApplicationApproved name="Amelita" schoolName="UEI College" />;
}
export function applicationComplete() {
  return <ApplicationComplete name="Amelita" schoolName="UEI College" />;
}
export function finalizingInvite() {
  return (
    <FinalizingInvite
      name="Amelita"
      schoolName="UEI College"
      ctaUrl="https://fynncredit.com"
    />
  );
}
export function microdepositFailure() {
  return <MicrodepositFailure name="Amelita" schoolName="UEI College" />;
}
export function studentDispersed() {
  return <StudentDispersed name="Amelita" schoolName="UEI College" />;
}
