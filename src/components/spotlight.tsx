export default function Spotlight({children}:{children:JSX.Element}) {
  return (
    <div>
      <div className="bkg__spotlight w-[100%] h-[100%] min-h-[640px] overflow-auto"></div>
      {children}
    </div>
  );
}
