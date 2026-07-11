import React from "react";

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default function ContentPageLayout({
  form,
  thumbnail,
  stats,
  comments,
}) {
  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch lg:h-[80vh]">
        {/* Column 1 — Form */}
        <div className="flex flex-col gap-4 lg:h-full">
          <Card className="h-full overflow-hidden">{form}</Card>
        </div>

        {/* Column 2 — Thumbnail/title on top, comment stats below */}
        <div className="flex flex-col gap-4 lg:h-full">
          <Card>{thumbnail}</Card>
          <Card>{stats}</Card>
        </div>

        {/* Column 3 — Comments list with only vertical scrolling allowed */}
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1 lg:h-full overflow-x-hidden">
          <Card className="flex h-full flex-col overflow-y-auto overflow-x-hidden">
            {comments}
          </Card>
        </div>
      </div>
    </div>
  );
}
