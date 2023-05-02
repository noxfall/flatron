const Scene = ({ children, flexFlow, justify }) => {
  return (
    <section
      className={
        `absolute flex w-full h-full pt-14 pl-16 items-center
        ${flexFlow === 'row' ? 'flex-row' : 'flex-col'}
        ${justify === 'between' ? 'justify-between' : 'justify-center'}
        `
      }
    >
      {children}
    </section>
  );
};

export default Scene;