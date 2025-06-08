import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  media: string;
  mediaType?: "image" | "video";
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
}

export default function FlipCard({
  media,
  mediaType = "image",
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  videoProps,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  const defaultVideoProps = {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    ...videoProps,
  };

  return (
    <div className={cn("group h-[420px] w-[80%] md:w-72 [perspective:1000px]", className)} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          {mediaType === "video" ? (
            <video
              src={media}
              className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
              {...defaultVideoProps}
            />
          ) : (
            <img
              src={media}
              alt="media"
              className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
            />
          )}
          <div className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</div>
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
            self[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}