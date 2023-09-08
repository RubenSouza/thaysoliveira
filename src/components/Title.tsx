type Props = {
  title: string;
  line?: string;
};

const Title = ({ title, line }: Props) => {
  return (
    <div className="text-primary-400 font-bold">
      <h1 className="text-sm md:text-base underline underline-offset-4 md:no-underline">
        {title}
      </h1>
      <div className={`${line} h-[2px] bg-primary-300 hidden md:flex`} />
    </div>
  );
};

export default Title;
