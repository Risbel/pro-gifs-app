const GifGridItem = ({ title, url }) => {
  return (
    <div className="grid content-between border bg-gradient-to-b from-violet-900 to-transparent border-slate-600 bg-origin-content rounded-xl overflow-hidden h-full w-full">
      <img className="object-contain max-h-32 w-full" src={url} alt={title} />
      <div className="max-h-6 lg:max-h-8 text-center px-2">
        <p className=" text-slate-100 py-2 text-xs lg:text-sm text-ellipsis">{title}</p>
      </div>
    </div>
  );
};

export default GifGridItem;
