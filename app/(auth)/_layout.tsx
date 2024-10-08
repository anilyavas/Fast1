import { Redirect, Stack } from 'expo-router';

import { useAuth } from '~/context/AuthContext';

export default function AuthLayout() {
  const { user } = useAuth();
  if (user) {
    return <Redirect href="/" />;
  }
  return <Stack />;
}
