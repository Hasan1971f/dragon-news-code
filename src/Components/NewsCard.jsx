import demoImage from '../assets/demo-card-thumbnail.png';

const NewsCard = ({ news }) => {
  return (
    <div>
      <img src={news?.image || demoImage} alt="Demo Card" />
    </div>
  );
};

export default NewsCard;


