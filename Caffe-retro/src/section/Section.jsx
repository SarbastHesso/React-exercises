import './Section.css';


const Section = ({ data, bgImage, id }) => {
  const { title, feature_1, feature_2, section_info } = data;
  const bgStyle = { backgroundImage: `url(${bgImage})` };
  return (
    <section className="section-style" style={bgStyle} id={id}>
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="feature_1">{feature_1}</p>
        <p className="feature_2">{feature_2}</p>
        <ul className="section_info">
          {section_info.map((item) => {
            return (
              <li className="section_info_item" key={item.id}>
                <span className="section_info_item-key">{item.key}</span>
                <span className="section_info_item-key">{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Section