'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryCard({ story }) {
  const shortStory = story?.story?.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <article className="group p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <img
            src={story.image}
            alt={story.name}
            fill
            className="rounded-full object-cover border-4 border-slate-50"
          />
        </div>

        <div>
          <h2 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
            {story.name}
          </h2>
          <p className="text-sm text-slate-500">{story.designation}</p>
          <span className="inline-block mt-1 text-[11px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
            {story.company}
          </span>
        </div>
      </div>

      {/* Story Preview */}
      <p className="mt-6 text-slate-600 text-[15px] leading-relaxed line-clamp-3">
        {shortStory}
      </p>

      {/* Footer Link */}
      <div className="mt-6 pt-5 border-t border-slate-100">
        <Link
          href={`/story/${story.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-all group-hover:gap-3"
        >
          Read Full Story <span>→</span>
        </Link>
      </div>
    </article>
  );
}
