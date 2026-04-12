import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumee — Legal",
  description: "Lumee app legal documents: Privacy Policy & Terms of Use.",
};

export default function LumeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lumee-legal fixed inset-0 z-50 min-h-screen overflow-y-auto bg-[#FDF6EC] text-[#3D2C1E]">
      {/* Paw print background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%235C4A32'%3E%3Cellipse cx='40' cy='45' rx='8' ry='10'/%3E%3Ccircle cx='30' cy='34' r='4.5'/%3E%3Ccircle cx='50' cy='34' r='4.5'/%3E%3Ccircle cx='25' cy='42' r='3.5'/%3E%3Ccircle cx='55' cy='42' r='3.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
