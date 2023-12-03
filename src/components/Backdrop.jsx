export const Backdrop = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="backdrop">
      {children}
    </div>
  );
};
