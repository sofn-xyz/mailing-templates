import Invoice, { InvoiceData } from "../Invoice";

const invoice: InvoiceData = {
  billingPeriod: "Nov 1-30",
  total: 13.6,
};

export function preview() {
  return (
    <Invoice email="youremail@example.com" name="Amelita" invoice={invoice} />
  );
}
