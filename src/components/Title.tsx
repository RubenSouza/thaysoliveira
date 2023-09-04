type Props = {
  title: string;
  line?: string;
};

const Title = ({ title, line }: Props) => {
  return (
    <div className="text-primary-400 font-bold">
      <h1>{title}</h1>
      <div className={`${line} h-[2px] bg-primary-300`} />
    </div>
  );
};

export default Title;
