const SideContainer = ({ children, menuTitle }) => {
  return (
    <aside
      className={
        `w-[280px] h-full
        mt-[-10px] pt-2
        flex flex-col 
        justify-start items-center 
        sideContainer px-1
      `}>
      <h4 className="uppercase">{menuTitle}</h4>
      {children}
    </aside>
  );
};

export default SideContainer;