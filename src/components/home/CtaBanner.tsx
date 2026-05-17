import { SparkleButton } from "@/components/ui/button-8";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brandGreen to-brandGreenLight text-white py-14">
      <div className="container-custom text-center">
        <h2 className="section-heading-white">Need Medical Assistance?</h2>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white !mb-8">
          Our team of expert doctors and staff is available 24x7 for emergency care.
          Book your OPD appointment or reach us anytime.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <SparkleButton href="/hospital/emergency">Emergency Helpline</SparkleButton>
          <SparkleButton href="/hospital/opd">Book OPD</SparkleButton>
        </div>
      </div>
    </section>
  );
}
