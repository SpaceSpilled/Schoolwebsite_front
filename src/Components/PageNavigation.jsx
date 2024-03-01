import "./PageNavigation.scss";

const PageNavigation = (props) => {
  const { pageName, link } = props;

  return (
    <div className="PageNavigation">
      <a href={link}>
        <button className="">
          <span class="details">{pageName} &nbsp;&nbsp;&nbsp; </span>
          <span class="arrow">&#8594;</span>
        </button>
      </a>
    </div>
  );
};

export default PageNavigation;
