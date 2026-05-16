import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Eye,
  Ear,
  Bone,
  Syringe,
  ShieldPlus,
  Microscope,
} from "lucide-react";

const departments = [
  { icon: Stethoscope, name: "General Medicine", href: "/departments/general-medicine" },
  { icon: HeartPulse, name: "Obstetrics & Gynecology", href: "/departments/obstetrics-gynecology" },
  { icon: Syringe, name: "General Surgery", href: "/departments/general-surgery" },
  { icon: Baby, name: "Paediatrics", href: "/departments/paediatrics" },
  { icon: Bone, name: "Orthopaedics", href: "/departments/orthopaedics" },
  { icon: Eye, name: "Ophthalmology", href: "/departments/ophthalmology" },
  { icon: Ear, name: "ENT", href: "/departments/ent" },
  { icon: Brain, name: "Psychiatry", href: "/departments/psychiatry" },
  { icon: ShieldPlus, name: "Radiology", href: "/departments/radiology" },
  { icon: Microscope, name: "Pathology", href: "/departments/pathology" },
];

export default function DepartmentsGrid() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#115e59]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <h2 className="section-heading-white">Our Departments</h2>
        <span className="section-heading-line-white" />
        <p className="section-subheading-white">
          Specialized care across all major medical disciplines
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {departments.map((dept) => (
            <Link
              key={dept.name}
              href={dept.href}
              className="flex flex-col items-center justify-center gap-3 bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[140px]"
            >
              <dept.icon
                size={40}
                strokeWidth={1.5}
                className="text-[#0f766e] group-hover:text-[#0d9488] transition-colors"
              />
              <span className="text-[13px] md:text-sm font-semibold text-[#1a1a2e] text-center leading-tight">
                {dept.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
