import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swipee — Legal",
  description: "Swipee app legal documents: Privacy Policy & Terms of Use.",
};

export default function SwipeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="swipee-legal fixed inset-0 z-50 min-h-screen overflow-y-auto bg-[#F3EDF8] text-[#2D1E3D]">
      {/* Photo card background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Cg fill='none' stroke='%238A64B8' stroke-width='2'%3E%3Crect x='12' y='15' width='18' height='23' rx='2.5' transform='rotate(-10 21 26)'/%3E%3Crect x='35' y='13' width='18' height='23' rx='2.5' transform='rotate(8 44 24)'/%3E%3Cpath d='M30 52 l7-5.5 l-1.5 3.5 l5.5-0.5 l-7 5.5 l1.5-3.5z' fill='%238A64B8' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "70px 70px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
