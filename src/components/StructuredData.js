import Script from "next/script";

const StructuredData = ({ data }) => {
  return (
    <Script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
