const GifGridItem = ({ title, url }) => {
  return (
    <div className="grid content-between border bg-gradient-to-b from-violet-900 to-transparent border-slate-600 bg-origin-content rounded-xl overflow-hidden h-full w-full">
      <img className="object-contain max-h-32 w-full" src={url} alt={title} />

      <p className="text-center text-slate-100 py-2 text-xs lg:text-sm">{title}</p>
    </div>
  );
};

export default GifGridItem;
