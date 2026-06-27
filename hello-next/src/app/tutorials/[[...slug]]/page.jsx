import Title from '@/Components/Title';
import React from 'react';

const TutorialsPage = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];

  return (
    <div>
      <div className="px-4 py-8">
        <Title>Tutorials Page</Title>
      </div>
      <ul>
        <li>{technology}</li>
        <li>{topic}</li>
        <li>{page_no}</li>
        <li>{subject}</li>
      </ul>
    </div>
  );
};

export default TutorialsPage;
