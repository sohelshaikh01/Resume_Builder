function ResumePreview({ template, data }) {
    const renderTemplate = () => {
      let content = template.content;
      for (const key in data) {
        content = content.replaceAll(`{${key}}`, data[key] || '');
      }
      return { __html: content };
    };
  
    return <div dangerouslySetInnerHTML={renderTemplate()} />;
  }
  
  export default ResumePreview;
  