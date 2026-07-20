import { Card } from "./ui/card";

export default function ContentPageLayout({
  form,
  thumbnail,
  stats,
  comments,
}) {
  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch lg:h-[80vh]">
        <div className="flex flex-col gap-4 lg:h-full">
          <Card>{form}</Card>
        </div>

        <div className="flex flex-col gap-4 lg:h-full">
          <Card>{thumbnail}</Card>
          <Card>{stats}</Card>
        </div>

        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1 lg:h-full overflow-x-hidden">
          <Card className="flex h-full flex-col overflow-y-auto overflow-x-hidden">
            {comments}
          </Card>
        </div>
      </div>
    </div>
  );
}
