import './styles.scss';

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;
  let isResume = false;
  console.log("Header Text::", headerText)
  if (headerText == 'My Resume'){
    isResume= true;
  }

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      {isResume&&<a href='https://drive.google.com/file/d/14NnurB1hF_w0BtVkWjPqheTb_ZQ42J8-/view?usp=drive_link'><span>{icon}</span></a>}
    </div>
  );
};


export default PageHeaderContent;
