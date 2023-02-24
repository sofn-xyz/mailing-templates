import ApplicationApproved from "../ApplicationApproved";
import ApplicationComplete from "../ApplicationComplete";
import FinalizingInvite from "../FinalizingInvite";
import MicrodepositFailure from "../MicrodepositFailure";
import StudentDispersed from "../StudentDispersed";
import ExitInterview from "../ExitInterview";

export function applicationApproved() {
  return <ApplicationApproved name="Amelita" schoolName="UEI College" />;
}
export function applicationComplete() {
  return <ApplicationComplete name="Amelita" schoolName="UEI College" />;
}
export function finalizingInvite() {
  return <FinalizingInvite name="Amelita" schoolName="UEI College" />;
}
export function microdepositFailure() {
  return <MicrodepositFailure name="Amelita" />;
}
export function studentDispersed() {
  return <StudentDispersed name="Amelita" schoolName="UEI College" />;
}
export function exitInterview() {
  const loanInfo = {
    firstPaymentDate: new Date("2023-12-22"),
    currentDate: new Date(),
    currentLoanAmount: 55930,
    initialLoanAmount: 56000,
    interestRate: 7.99,
    loanTerms: 48,
    accruedInterest: 400,
    previousPayments: 70,
    monthlyPayment: 499,
    minimumIncome10: 9999,
    minimumIncome20: 4999,
    minimumIncomePause: 3000,
  };
  return <ExitInterview loanInfo={loanInfo} />;
}
