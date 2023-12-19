export const SpriteIcon = ({ path, iconName, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${path}#icon-${iconName}`} />
    </svg>
  );
};
