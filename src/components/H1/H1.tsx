type h1Props = {
  className: string;
  children: React.ReactNode;
};

const H1 = ({ className, children }: h1Props) => {
  return <h1 className={className}>{children}</h1>;
};

export default H1;
