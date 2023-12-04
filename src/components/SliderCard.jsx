import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';

export const SliderCard = ({ slidesInfo }) => {
  const { title, text, date, imgSrc, link } = slidesInfo;
  const dateValue = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(dateValue);

  return (
    <article className="slider-card">
      <a
        href={link}
        className="slider-card__link"
        aria-label={`Read more about ${title}`}
      >
        <picture>
          <source
            srcSet={`${imgSrc.lg} 1x, ${imgSrc.lgX2} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${imgSrc.md} 1x, ${imgSrc.mdX2} 2x`}
            media="(min-width: 768px)"
          />
          <img
            className="slider-card__img"
            srcSet={`${imgSrc.sm} 1x, ${imgSrc.smX2} 2x`}
            src={imgSrc.sm}
            alt={title}
            width="320"
          />
        </picture>
        <div className="slider-card__wrapper">
          <div className="slider-card__heading">
            <h3 className="slider-card__title">{title}</h3>
            <span className="slider-card__circle-btn">
              <ArrowRightIcon />
            </span>
          </div>
          <div className="slider-card__content">
            <p className="slider-card__paragraph">{text}</p>
            <time className="date" dateTime={date}>
              {formattedDate}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
};
