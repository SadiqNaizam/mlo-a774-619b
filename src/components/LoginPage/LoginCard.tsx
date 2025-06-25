import React from 'react';
import { Card } from '@/components/ui/card';
import PageHeading from './PageHeading';
import LoginForm from './LoginForm';
import SignupPrompt from './SignupPrompt';

const LoginCard: React.FC = () => {
  return (
    <Card className="w-96 px-8 py-6 bg-card text-card-foreground flex flex-col gap-6 rounded-lg shadow-xl">
      <PageHeading />
      <LoginForm />
      <SignupPrompt />
    </Card>
  );
};

export default LoginCard;
