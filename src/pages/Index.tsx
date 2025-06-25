import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/LoginPage/LoginCard';

/**
 * The main index page of the application, which serves as the login page.
 * It utilizes the MainAppLayout to center the LoginCard component in the viewport.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
