const SideContainer = ({ children, menuTitle }) => {
  return (
    <aside
      className={
        `w-[200px] h-full
        mt-[-10px] pt-2
        flex flex-col 
        justify-start items-center 
        sideContainer
      `}>
      <h4 className="uppercase">{menuTitle}</h4>
      {children}
    </aside>
  );
};

export default SideContainer;